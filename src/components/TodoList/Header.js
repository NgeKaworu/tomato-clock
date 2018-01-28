import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
        <h1 className="component-title">任务列表</h1>
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                       placeholder="输入待办任务，按回车确认~" />
      </header>
    )
  }
}
