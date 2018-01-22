import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Button, Modal, Form, FormGroup, ControlLabel, InputGroup, FormControl, Overlay, Tooltip, ButtonToolbar } from "react-bootstrap";

export default class StartBtn extends Component {
    static propTypes = {
        runtime: PropTypes.bool.isRequired,
        clockStart: PropTypes.func.isRequired,
        clockStop: PropTypes.func.isRequired
    }

    state = {
        showModal: false,
        deration: 25,
        title: "快速开始",
        validationState: null,
        error: false
    }

    _close = () => {
        this.setState({
            showModal: false
        })
    }

    _open = () => {
        this.setState({
            showModal: true
        })
    }

    handleChange = e => {

        const target = e.target;
        const value = target.value;
        const name = target.name;
        if (name === "deration" && (isNaN(value) || value <= 0)) {
            target.value = value.slice(0, -1);
            this.setState({
                validationState: "error",
                error: true
            })
            setTimeout(() => {
                this.setState({
                    validationState: null,
                    error: false
                })
            }, 5000);
            e.preventDefault();

        } else {
            this.setState({
                [name]: value,
                validationState: null,
                error: false,
            })
        }
    }

    handleSubmit = time => {
        const convertedTime = this.state.deration * 60000;
        if (this.props.onSubmit) {
            this.props.onSubmit(convertedTime);
        }
    }

    renderButtonToolbar = () => {
        const { runtime, clockStart, clockStop } = this.props;
        return runtime
            ?
            <Button bsStyle="darger" onClick={clockStop} bsSize="large" block>结束</Button>
            :
            <Button bsStyle="primary" onClick={this._open} bsSize="large" block>开始</Button >
    }

    render() {
        const { deration, showModal, validationState, error, title } = this.state;

        const sharedProps = {
            show: error,
            target: () => ReactDOM.findDOMNode(this.refs.target)
        };
        return (
            <div>
                {this.renderButtonToolbar()}
                <Modal show={showModal} onHide={this._close}>
                    <Modal.Header closeButton>
                        <Modal.Title>任务设置</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup bsSize="large" controlId="setWorkTitle">
                                <ControlLabel>设置标题</ControlLabel>
                                    <FormControl placeholder={title} onChange={this.handleChange} name="title" autoFocus />
                            </FormGroup>
                            <FormGroup bsSize="large" controlId="setWorkTime" validationState={validationState}>
                                <ControlLabel>自定义时间</ControlLabel>
                                <InputGroup>
                                    <FormControl placeholder={deration} onChange={this.handleChange} name="deration" ref="target" />
                                    <InputGroup.Addon>分钟</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.handleSubmit}>确定</Button>
                        <Button onClick={this._close}>取消</Button>
                    </Modal.Footer>
                </Modal>

                <Overlay {...sharedProps} placement="top">
                    <Tooltip id="overload-top">请输入一个大于零的数字</Tooltip>
                </Overlay>
            </div>
        )   
    }

}



