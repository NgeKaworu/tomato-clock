import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/TodoList/Header'
import MainSection from '../../components/TodoList/MainSection'
import * as TodoActions from '../../actions/todos'

const App = ({ todos, actions }) => (
    <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
    </div>
)

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
