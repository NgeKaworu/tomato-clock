import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as clockActions from "./../actions/clock";
import * as switchActions from "./../actions/clockSwitch";
import { completeTodo } from "./../actions/todos";


class ClockCore extends Component {
    static propTypes = {
        runtime: PropTypes.bool.isRequired,
        clockSwitch: PropTypes.bool.isRequired,
        clock: PropTypes.object.isRequired,
        clockActions: PropTypes.object.isRequired,
        switchActions: PropTypes.object.isRequired,
        completeTodo: PropTypes.func.isRequired,
        currentId: PropTypes.number.isRequired
    }

    state = {
        derationBackup: 1500000
    }

    handleStart = () => {
        const { clockActions } = this.props

        const date = Date.now();
        clockActions.startClock(date);          
        this._timer = setInterval(
            () => (
                this._countDown()),
            1000
        );
    }

    handleStop = () => {
        const { clockActions, switchActions } = this.props
        switchActions.switchOff();
        const date = Date.now();
        clockActions.stopClock(date);
        clearInterval(this._timer);
        clockActions.setDeration(this.state.derationBackup);
    }

    componentWillMount = () => {
        const { clockActions, switchActions } = this.props 
        let localClock = this._loadFormLocalStorage();
        console.log(localClock)
        if(localClock){
            let lastTime = localClock.clock.planStopTime - Date.now()
            if (localClock.runtime && lastTime > 0){
                clockActions.setDeration(lastTime);
                switchActions.switchOn();
                this.handleStart();
            }
        }
    }

    componentDidUpdate = () => {
        const { runtime, clockSwitch } = this.props;
        if (!runtime && clockSwitch) {
            this.handleStart();
        }
        if (runtime && !clockSwitch) {
            this.handleStop();
        }
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
        const { clock, clockActions, completeTodo, currentId } = this.props;
        if(clock.deration < 0) {
            this.handleStop();
            completeTodo(currentId);
        } else {
            clockActions.countDown();
        }
    }

    _loadFormLocalStorage = () => {
        let localClock = localStorage.getItem('clock');
        return localClock = localClock ? JSON.parse(localClock) : null;
    }

    _updateLocalStorage = ( obj ) => {
        localStorage.setItem('clock', JSON.stringify(obj))
    }

    render() {

        return null;
    }

}

const mapStateToProps = state => ({
    runtime: state.runtime,
    clockSwitch: state.clockSwitch,
    clock: state.clock,
    currentId: state.currentId
})

const mapDispatchToProps = dispatch => ({
    clockActions: bindActionCreators(clockActions, dispatch),
    switchActions: bindActionCreators(switchActions, dispatch),
    completeTodo: id => dispatch(completeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClockCore)

