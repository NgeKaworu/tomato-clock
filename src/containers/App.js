import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Route, Link, NavLink, Switch } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import TomatoClock from "./TomatoClock";
import TodoList from "./TodoList";
import PrivateRoute from './PrivateRoute';
import Login from "./Login";
import TestPg from "./../components/test";
import { logoutWithFakeAsync } from "./../actions/auth";


const App = ({ isAuthenticated, logoutWithFakeAsync, pathname }) => (
    <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">TomatoClock-TodoList</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav> 
                    <NavItem eventKey={1}>
                            <NavLink className="NavLink" exact to="/" >番茄钟</NavLink>
                    </NavItem>
                    <NavItem eventKey={2}>
                            <NavLink className="NavLink" to="/todoList" >任务列表</NavLink>
                    </NavItem>
                    <NavItem eventKey={3}>
                            <NavLink className="NavLink" to="/TestPg" >测试页</NavLink>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title="登陆" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1}>{
                            isAuthenticated 
                            ?
                                <Link className="NavLink" onClick={logoutWithFakeAsync}>注销</Link>
                            :
                                <Link className="NavLink" to={{
                                    pathname: '/login',
                                    state: { from: pathname }
                                }} >登陆</Link>
                        }
                        </MenuItem>
                        <MenuItem divider />
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path="/" exact component={TomatoClock} />
                <Route path="/login" component={Login} />
                <Route path="/TestPg" component={TestPg} />
                <PrivateRoute path="/todoList" component={TodoList} />
               
            </Switch>
        </div>
)

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logoutWithFakeAsync: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    pathname: state.router.location.pathname
})

const mapDispatchToProps = dispatch => ({
    logoutWithFakeAsync: () => {
        dispatch(logoutWithFakeAsync());
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

