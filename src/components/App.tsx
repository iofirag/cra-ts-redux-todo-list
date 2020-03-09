import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import { Todo } from '../models/Todo'


interface Props {
  todos: Todo[],
  actions: {
    addTodo: Function
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

class App extends Component<Props> {
  render() {
    return (
      <div>
        <h1 className="header">Todos</h1>
        <TodoInput addTodo={this.props.actions.addTodo}/>
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)