import React, { Component } from "react";
import fakeAuth from "./../api/login";
import { Redirect } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default class Login extends Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate( () => {
            this.setState({ redirectToReferrer: true })
        })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' }};
        const { redirectToReferrer } = this.state;

        if(redirectToReferrer){
            console.log("true");
            return (
                <Redirect to={from} />
            )
        } else {
            console.log("false");
            return (
            <div>
                { from.pathname !== '/' ? (<p>登录以访问<code>{from.pathname}</code></p>) : "" }
                <Button onClick={this.login}>登陆</Button>
            </div>
            )}     
    }
}
