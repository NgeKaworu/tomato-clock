import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, ButtonToolbar } from "react-bootstrap";
import StartBtnContainer from "./StartBtnContainer";
import OptionWindowContainer from "./OptionWindowContainer";
import * as ClockActions from "./../../../actions";

class CtrlBar extends Component {
    state = {
        optionWindowShowModal: false
    }

    static propTypes = {
        runtime: PropTypes.bool.isRequired,
        clock: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    optionWindowClose = () => {
        this.setState({
            optionWindowShowModal: false
        })
    }

    optionWindowOpen = () => {
        this.setState({
            optionWindowShowModal: true
        })
    }

    render(){
        return (
        <div>
            <ButtonToolbar>
                <StartBtnContainer
                    actions={this.props.actions}
                    runtime={this.props.runtime}
                    clock={this.props.clock}
                />
                <Button 
                    bsStyle="danger"  
                    onClick={this.optionWindowOpen} 
                    disabled={this.props.runtime}>
                    任务设置
                </Button>
            </ButtonToolbar>

            <OptionWindowContainer 
                showModal={this.state.optionWindowShowModal}
                close={this.optionWindowClose}
                setDeration={this.props.actions.setDeration}
            />
        </div>
        )
    }
}

const mapStateToProps = state => ({
    runtime: state.reducer.runtime.runtime,
    clock: state.reducer.clock
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ClockActions, dispatch)
})
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CtrlBar)