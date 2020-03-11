import React, { Component } from 'react'
import TodoInput from '../containers/TodoInput'
import TodoList from '../containers/TodoList'

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Todos</h1>
        <TodoInput/>
        <TodoList/>
      </div>
    )
  }
}

export default App;