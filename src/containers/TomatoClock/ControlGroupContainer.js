import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ControlGroup from "./../../components/TomatoClock/ControlGroup";
import * as switchActions from "./../../actions/clockSwitch";
import { addTodo, editTodo, completeTodo } from './../../actions/todos';
import { changeId } from './../../actions/currentId';
import { setDeration } from './../../actions/clock';

class ControlGroupContainer extends Component {

    static defaultProps = {
        todoStyle: false,
    }

    static propTypes = {
        currentId: PropTypes.number.isRequired,
        todoStyle: PropTypes.bool.isRequired,
        runtime: PropTypes.bool.isRequired,
        switchActions: PropTypes.object.isRequired,
        addTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
        changeId: PropTypes.func.isRequired,
        setDeration: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
        id: PropTypes.number
    }

    state = {
        cid: this.props.id || this.props.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1
    }

    handleSubmit = (text, time) => {
        const { todoStyle, addTodo, switchActions, editTodo, changeId, setDeration, id } = this.props;
        const { cid } = this.state;
        if (todoStyle) {
            editTodo(id, text);
        } else {
            addTodo(text);
        }
        changeId(cid);
        setDeration(time);
        switchActions.switchOn();
    }

    handleComplete = () => {
        const { currentId, completeTodo, switchActions } = this.props;
        completeTodo(currentId);
        switchActions.switchOff();
    }

    _getTitleById = () => {
        const { todos } = this.props;
        const { cid } = this.state;
        return todos.filter(todo => todo.id === cid)[0].text

    }

    _show = () => {

        const { runtime, todos, currentId } = this.props;


        const { cid } = this.state;
        let completed = todos.filter(todo => todo.id === cid)[0].completed
        if (runtime) {
            return currentId === cid;
        } else {
            return completed === false;
        }
    }


    render() {
        const { runtime, switchActions, todoStyle } = this.props;

        if (todoStyle) {
            const title = this._getTitleById();
            const didShow = this._show();
            return didShow
                ?
                (
                    <ControlGroup
                        todoStyle={todoStyle}
                        runtime={runtime}
                        handleSubmit={this.handleSubmit}
                        handleStop={switchActions.switchOff}
                        handleComplete={this.handleComplete}
                        title={title}
                    />
                )
                : null
        } else {
            return (
                <ControlGroup
                    todoStyle={todoStyle}
                    runtime={runtime}
                    handleSubmit={this.handleSubmit}
                    handleStop={switchActions.switchOff}
                    handleComplete={this.handleComplete}
                />
            )
        }

    }

}

const mapStateToProps = state => ({
    runtime: state.runtime,
    todos: state.todos,
    currentId: state.currentId
})

const mapDispatchToProps = dispatch => ({
    switchActions: bindActionCreators(switchActions, dispatch),
    addTodo: text => dispatch(addTodo(text)),
    editTodo: (id, text) => dispatch(editTodo(id, text)),
    changeId: id => dispatch(changeId(id)),
    setDeration: time => dispatch(setDeration(time)),
    completeTodo: id => dispatch(completeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlGroupContainer)