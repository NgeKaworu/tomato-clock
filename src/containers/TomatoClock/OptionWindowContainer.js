import React, { Component } from "react";
import PropTypes from "prop-types";
import OptionWindow from './../../../components/TomatoClock/CtrlBar/OptionWindow';

export default class OptionWindowContainer extends Component {

    static propTypes = {
        showModal: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired,
        setDeration: PropTypes.func.isRequired
    }

    handleSubmit = time => {
        if (this.props.setDeration) {
            this.props.setDeration(time);
        }
        this.props.close();
    }

    render() {
        return (
            <OptionWindow
                close={this.props.close}
                showModal={this.props.showModal}
                onSubmit={this.handleSubmit}
            />
        )
    }

}
