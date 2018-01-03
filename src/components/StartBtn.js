import React, { Component } from "react";
import { Button, Modal, ButtonToolbar, Form, FormGroup, ControlLabel, FormControl, InputGroup } from "react-bootstrap";

export default class StartBtn extends Component {
    state = {
        showModal: false
    }
    
    render() {
        return (
            <div>
                <Button bsStyle="primary" onClick={this.open}>开始</Button>
            </div>
        )
    }

}