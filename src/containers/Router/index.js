import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Route, Link, Switch } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'


import TomatoClock from "./../TomatoClock";
import TodoList from "./../TodoList";
import PrivateRoute from './PrivateRoute';
import Login from "./Login";
import TestPg from "./../../components/test.js";
import NotFound from "./NotFound";
import { logoutWithFakeAsync } from "./../../actions/auth";


const App = ({ isAuthenticated, logoutWithFakeAsync, location }) => (
    <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/tomato-clock">TomatoClock-TodoList</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav> 
                    <LinkContainer className="nav-link" exact to="/tomato-clock" >
                        <NavItem eventKey={1}>番茄钟</NavItem>
                    </LinkContainer>
                    <LinkContainer className="nav-link" to="/todoList" >
                        <NavItem eventKey={2}>任务列表</NavItem>
                    </LinkContainer>
                    <LinkContainer className="nav-link" to="/TestPg" >
                        <NavItem eventKey={3}>测试页</NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title="登陆" id="basic-nav-dropdown">
                    {
                        isAuthenticated 
                        ?
                        <MenuItem eventKey={1.1} className="nav-link" onClick={logoutWithFakeAsync}>注销</MenuItem>
                        :
                        <LinkContainer className="nav-link" to={{
                            pathname: '/login',
                            state: { from: location }
                        }}>
                            <MenuItem eventKey={1.1}>登陆</MenuItem>
                        </LinkContainer>
                    }
                        <MenuItem divider />
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path="/tomato-clock" exact component={TomatoClock} />
                <Route path="/login" component={Login} />
                <Route path="/TestPg" component={TestPg} />
                <Route path="/404" component={NotFound} />
                <PrivateRoute path="/todoList" component={TodoList} />
                <Route render={ () => (
                    <Redirect to={{
                        pathname: '/404',
                        state: { from: location }
                    }} />
                )} />
            </Switch>
        </div>
)

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logoutWithFakeAsync: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    location: state.router.location
})

const mapDispatchToProps = dispatch => ({
    logoutWithFakeAsync: () => {
        dispatch(logoutWithFakeAsync());
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

