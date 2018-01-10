import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const StartBtn = ({ runtime, clockStart, clockStop }) => (
    runtime
        ?
        <Button bsStyle="primary" onClick={clockStop}>结束</Button>
        :
        <Button bsStyle="primary" onClick={clockStart}>开始</Button>
)

StartBtn.propTypes = {
    runtime: PropTypes.bool.isRequired,
    clockStart: PropTypes.func.isRequired,
    clockStop: PropTypes.func.isRequired
}

export default StartBtn