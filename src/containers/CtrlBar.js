import React from "react";
import propType from "prop-types";
import OptionBtn from "../components/OptionBtn";
import StartBtn from "../components/StartBtn";
import { Button, ButtonToolbar } from "react-bootstrap";

const CtrlBar = () => (
    <ButtonToolbar>
        <StartBtn />
        <OptionBtn />
    </ButtonToolbar>
)

export default CtrlBar