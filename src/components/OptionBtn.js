import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ButtonToolbar, Form, FormGroup, ControlLabel, FormControl, InputGroup, Overlay, Tooltip } from "react-bootstrap";

export default class OptionBtn extends Component{
    state = {
        showModal: false,
        deration: 25,
        validationState: null,
        error: false
    }

    open = () => {
        this.setState({
            showModal: true
        })
    }

    close = () => {
        this.setState({
            showModal: false
        })
    }

    handleChange = e => {
        if(isNaN(e.target.value) || e.target.value <= 0){
            this.setState({
                validationState: "error",
                error: true
            })
            e.preventDefault();
        }else{
            this.setState({
                deration: e.target.value,
                validationState: null,
                error: false
            })
        }

    }

    handleSubmit = e => {
        
    }

    render(){
        const sharedProps = {
            show: this.state.error,
            target: () => ReactDOM.findDOMNode(this.refs.target)
        };

        return(
            
            <div>
                <Button bsStyle="danger" onClick={this.open}>任务设置</Button>
                <Modal bsSize="small" show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>任务设置</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="setWorkTime" validationState={this.state.validationState}>
                                <ControlLabel>自定义时间</ControlLabel>
                                <InputGroup>
                                    <FormControl value={this.state.deration} onChange={this.handleChange} ref="target"/>
                                    <InputGroup.Addon>分钟</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.handleSubmit}>确定</Button>
                        <Button onClick={this.close}>取消</Button>
                    </Modal.Footer>
                </Modal>

                <Overlay {...sharedProps} placement="top">
                    <Tooltip id="overload-top">请输入一个大于零的数字</Tooltip>
                </Overlay>
            </div>
        )
    }

}