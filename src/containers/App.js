import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import TomatoClock from "./TomatoClock";
import TodoList from "./TodoList";

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">番茄钟</Link>
                </li>
                <li>
                    <Link to="/todoList">任务列表</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/" exact component={TomatoClock} />
                <Route path="/todoList" component={TodoList} />
            </Switch>
        </div>
    </Router>
)

export default App

