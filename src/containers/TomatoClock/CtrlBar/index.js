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
        deration: PropTypes.number.isRequired,
        action: PropTypes.object.isRequired
    }

    optionWindowClose = () => {
        this.setState({
            optionWindowShowModal: false
        })
    }

    optionWindowOpen = () => {
        console.log("123");
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
                    deration={this.props.deration}
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