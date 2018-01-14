import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import TomatoClock from "./TomatoClock";
import TodoList from "./TodoList";
import PrivateRoute from './PrivateRoute';
import Login from "./Login";
import TestPg from "./../components/test";

const App = ({ match, location, history }) => {
    console.log(history)
return (
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
                    <NavItem eventKey={3}>
                        <NavLink className="NavLink" to="/TestPg" >测试页</NavLink>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title="登陆" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1}><Link className="NavLink" to={{
                            pathname: '/login',
                            state: { from: match.path }
                        }}>登陆</Link></MenuItem>
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
    </Router>
)
}
export default withRouter(App);

