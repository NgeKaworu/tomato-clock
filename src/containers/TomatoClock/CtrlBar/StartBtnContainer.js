import React, { Component } from "react";
import PropTypes from "prop-types";
import StartBtn from "./../../../components/TomatoClock/CtrlBar/StartBtn";

export default class StartBtnContainer extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        runtime: PropTypes.bool.isRequired,
        clock: PropTypes.object.isRequired
    }

    static defaultProps = {
        deration: 1500000
    }

    state = {
        derationBackup: this.props.deration
    }

    handleStart = () => {
        if(this.props.actions.startClock){
            const date = Date.now();
            this.props.actions.startClock(date);          
            this._timer = setInterval(
                () => (
                    this._countDown()),
                1000
            );
        }
    }

    handleStop = () => {
        if(this.props.actions.stopClock){
            const date = Date.now();
            this.props.actions.stopClock(date);
            clearInterval(this._timer);
            this.props.actions.setDeration(this.state.derationBackup);
        }
    }

    componentWillMount = () => {
        let localClock = this._loadFormLocalStorage();
        let lastTime = localClock.clock.planStopTime - Date.now()
        if (localClock.runtime && lastTime > 0){
            this.props.actions.setDeration(lastTime);
            this.handleStart();
        }
    }

    componentDidUpdate = () => {
        this._updateLocalStorage({ clock: this.props.clock, runtime: this.props.runtime });
    }

    componentWillUnmount = () => {
        clearInterval(this._timer);
        let leaveTime = Date.now();
        let localClock = this._loadFormLocalStorage();
        this._updateLocalStorage({
            ...localClock,
            "clock": { ...localClock.clock, leaveTime }
        });
    }

    _countDown = () => {
        if(this.props.deration < 0) {
            this.handleStop();
        }else if (this.props.actions.countDown){
            this.props.actions.countDown();
        }
    }

    _loadFormLocalStorage = () => {
        let localClock = localStorage.getItem('clock');
        return localClock = localClock ? JSON.parse(localClock) : {};
    }

    _updateLocalStorage = ( obj ) => {
        localStorage.setItem('clock', JSON.stringify(obj))
    }

    render() {
        return <StartBtn 
            runtime={this.props.runtime}
            clockStart={this.handleStart}
            clockStop={this.handleStop}
        />
    }

}

window.onbeforeunload = () => {
    let leaveTime =Date.now();
    let localClock = localStorage.getItem('clock');
    localClock = localClock ? JSON.parse(localClock) : {}
    localClock = {
        ...localClock,
        "clock": { ...localClock.clock, leaveTime }
    }
    localStorage.setItem('clock', JSON.stringify(localClock));
}
