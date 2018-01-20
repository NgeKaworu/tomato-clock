import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import StartBtn from "./../../components/TomatoClock/CtrlBar/StartBtn";
import * as switchActions from "./../../actions/clockSwitch";

const StartBtnContainer = ({ runtime, actions }) => (
    <StartBtn 
        runtime={runtime}
        clockStart={actions.switchOn}
        clockStop={actions.switchOff}
    />
)

StartBtnContainer.propTypes = {
    runtime: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    runtime: state.runtime
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(switchActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(StartBtnContainer)