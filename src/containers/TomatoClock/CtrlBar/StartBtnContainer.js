import React, { Component } from "react";
import PropTypes from "prop-types";
import StartBtn from "./../../../components/TomatoClock/CtrlBar/StartBtn";

export default class StartBtnContainer extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        runtime: PropTypes.bool.isRequired,
        deration: PropTypes.number.isRequired
    }

    static defaultProps = {
        deration: 1500000
    }

    state = {
        derationBackup: 0
    }

    handleStart = () => {
        if(this.props.actions.startClock){
            const date = Date.now();
            this.props.actions.startClock(date);
            this.setState({
                derationBackup: this.props.deration
            });
            
            this._timer = setInterval(
                () => (
                    this._countDown()),
                1000
            )
        }
    }

    handleStop = () => {
        if(this.props.actions.stopClock){
            const date = Date.now();
            this.props.actions.stopClock(date)
            clearInterval(this._timer);
            this.props.actions.setDeration(this.state.derationBackup)
        }
    }

    componentWillUnmount = () => {
        clearInterval(this._timer);
    }

    _countDown = () => {
        if(this.props.deration < 0) {
            this.handleStop();
        }else if (this.props.actions.countDown){
            this.props.actions.countDown();
        }
    }
    
    render() {
        return <StartBtn 
            runtime={this.props.runtime}
            clockStart={this.handleStart}
            clockStop={this.handleStop}
        />
    }

}
