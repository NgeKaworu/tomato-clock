import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import TomatoClock from "./TomatoClock";
import TodoList from "./TodoList";
import PrivateRoute from './PrivateRoute';
import Login from "./Login";

const App = () => (
    <Router>
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">TomatoClock-TodoList</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav> 
                    <NavItem eventKey={1}>
                        <NavLink className="NavLink"  exact to="/" >番茄钟</NavLink>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <NavLink className="NavLink" to="/todoList" >任务列表</NavLink>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title="登陆" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1}><Link className="NavLink" to="/login" >登陆</Link></MenuItem>
                        <MenuItem divider />
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path="/" exact component={TomatoClock} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/todoList" component={TodoList} />
               
            </Switch>
        </div>
    </Router>
)

export default App

