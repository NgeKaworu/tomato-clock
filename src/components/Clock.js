import React, { Component } from "react";
import propType from "prop-types";

export default class Clock extends Component {
    static propType = {
        deration: propType.number.isRequired
    }

    timeToHMS = time => {
    const h = Math.floor(time / 3600),
        m = Math.floor(time % 3600 / 60),
        s = Math.floor(time % 3600 % 60);
    return (h > 0 ? (h < 10 ? "0" + h : h) + ":" : "00:") + (m > 0 ? (m < 10 ? "0" + m : m) + ":" : "00:") + (s > 0 ? (s < 10 ? "0" + s : s) : "00");
    }

    render(){
        return (
            <h1>{this.timeToHMS(this.props.deration)}</h1>
        )
    }

}