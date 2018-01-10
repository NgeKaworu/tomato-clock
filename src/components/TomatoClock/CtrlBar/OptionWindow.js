import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Button, Modal, Form, FormGroup, ControlLabel, InputGroup, FormControl, Overlay, Tooltip } from "react-bootstrap";

export default class OptionWindow extends Component {
    state = {
        deration: 25,
        validationState: null,
        error: false
    }
    
    static defaultPorps = {
        showModal: false
    }

    static propTypes = {
        close: PropTypes.func.isRequired,
        showModal: PropTypes.bool.isRequired,
        onSubmit: PropTypes.func.isRequired
    }

    handleChange = e => {
        if (isNaN(e.target.value) || e.target.value <= 0) {
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
                deration: e.target.value,
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
    
    render(){
        const sharedProps = {
            show: this.state.error,
            target: () => ReactDOM.findDOMNode(this.refs.target)
        };
        return (
            <div>
                <Modal bsSize="small" show={this.props.showModal} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>任务设置</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="setWorkTime" validationState={this.state.validationState}>
                                <ControlLabel>自定义时间</ControlLabel>
                                <InputGroup>
                                    <FormControl placeholder={this.state.deration} onChange={this.handleChange} ref="target" autoFocus/>
                                    <InputGroup.Addon>分钟</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.handleSubmit}>确定</Button>
                        <Button onClick={this.props.close}>取消</Button>
                    </Modal.Footer>
                </Modal>

                <Overlay {...sharedProps} placement="top">
                    <Tooltip id="overload-top">请输入一个大于零的数字</Tooltip>
                </Overlay>
            </div>
            )   
    }
}