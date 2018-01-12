import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import fakeAuth from './../api/login';
import { authLogin } from "./../actions/auth";


class Login extends Component {
    state = {
        redirectToReferrer: false
    }

    static propTypes = {
        authLogin: PropTypes.func.isRequired
    }

    login = () => {
        fakeAuth.authenticate( () => {
            this.props.authLogin();
            this.setState({ redirectToReferrer: true });
        })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' }};
        const { redirectToReferrer } = this.state;

        if(redirectToReferrer){
            return (
                <Redirect to={from} />
            )
        } else {
            return (
            <div>
                { from.pathname !== '/' ? (<p>登录以访问<code>{from.pathname}</code></p>) : "" }
                <Button onClick={this.login}>登陆</Button>
            </div>
            )}     
    }
}

// const mapStateToProps = state => {
//     auth: state.auth
// }

const mapDispatchToProps = dispatch => {
    return {
        authLogin: () => {
            dispatch(authLogin());
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);