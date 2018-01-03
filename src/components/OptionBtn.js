import React, { Component } from "react";
import { Button, Modal, ButtonToolbar, Form, FormGroup, ControlLabel, FormControl, InputGroup } from "react-bootstrap";

export default class OptionBtn extends Component{
    state = {
        showModal: false
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

    render(){
        return(
            <div>
                <Button bsStyle="danger" onClick={this.open}>任务设置</Button>
                <Modal bsSize="small" show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>任务设置</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormGroup controlId="setWorkTime">
                                <ControlLabel>自定义时间</ControlLabel>
                                <InputGroup>
                                    <FormControl value="25" />
                                    <InputGroup.Addon>分钟</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>取消</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}