import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/TodoList/Header'
import MainSection from '../../components/TodoList/MainSection'
import * as TodoActions from '../../actions/todos'
import { switchOff } from './../../actions/clockSwitch';

class TodoList extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired,
        currentId: PropTypes.number.isRequired,
        switchOff: PropTypes.func.isRequired
    }

    handleCompleted = id => {
        const { actions, currentId, switchOff } = this.props;
        actions.completeTodo(id);
        if(id === currentId){
            switchOff()
        }
    }

    componentDidUpdate(){
        localStorage.setItem('todos', JSON.stringify(this.props.todos));
    }

    render() {

        const { actions, todos } = this.props;
        return (
            <div>
                <Header addTodo={actions.addTodo} />
                <MainSection todos={todos} 
                             actions={actions}
                             onCompleted={this.handleCompleted} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
    currentId: state.currentId
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch),
    switchOff: () => dispatch(switchOff())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
