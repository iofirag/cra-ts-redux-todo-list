import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../models/Todo'

interface Props {
  todos: Todo[],
  actions: any
}

class TodoList extends Component<Props> {
  
  render() {
    return (
      <ul className="todo__list">
        {
           this.props.todos.map((todo: Todo) => {
              return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
          })
        }
      </ul>
    )
  }
}
export default TodoList