import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ButtonToolbar } from "react-bootstrap";
import OptionBtn from "./OptionBtn";
import StartBtn from "./StartBtn";
import * as ClockActions from "../../../actions"; 

const CtrlBar = ({ actions, runtime, deration }) => (
    <ButtonToolbar>
        <StartBtn 
            actions={actions} 
            runtime={runtime}
            deration={deration}
        />
        <OptionBtn 
            setDeration={actions.setDeration} 
            runtime={runtime}
        />
    </ButtonToolbar>
)

CtrlBar.propTypes = {
    actions: PropTypes.object.isRequired,
    runtime: PropTypes.bool.isRequired,
    deration: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    runtime: state.runtime.runtime,
    deration: state.clock.deration
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ClockActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CtrlBar)