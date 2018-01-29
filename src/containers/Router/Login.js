import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import { loginWithFakeAsync } from "./../../actions/auth";


class Login extends Component {

    static propTypes = {
        loginWithFakeAsync: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        isFetching: PropTypes.bool.isRequired
    }

    login = () => {
        const { loginWithFakeAsync } = this.props;
        if(loginWithFakeAsync){
            loginWithFakeAsync();
        }
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/tomato-clock' } };
        const { isAuthenticated, isFetching } = this.props;

        if(isFetching){
            return (
                <h1 className="component-title">Lodding...</h1>
            )
        }

        if (isAuthenticated){
            return <Redirect to={from}/>
        } else {
            return (
            <div>
                <h1 className="component-title">登陆</h1>
                <h1 className="center">登录以访问<code>{from.pathname}</code></h1>
                <Button className="app-btn" onClick={this.login} block>登陆</Button>
            </div>
        )}     
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.auth.isFetching
})

const mapDispatchToProps = dispatch => ({
    loginWithFakeAsync: () => {
        dispatch(loginWithFakeAsync());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);