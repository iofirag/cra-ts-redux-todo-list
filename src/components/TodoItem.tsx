import React, { Component } from 'react'
import { Todo } from '../models/Todo'

interface Props {
  todo: Todo
  actions: any,
}
interface State {
  title: string,
  completed: boolean,
  checked?: boolean,
  description?: string
  dueDate?: string
  focused?: boolean,
}

class TodoItem extends Component<Props, State> {
  constructor(props) {
    super(props);
    
    this.handleUpdate.bind(this);

    this.state = { 
      title: this.props.todo.title,
      completed: this.props.todo.isCompleted,
    }
  }

  onClickComplete() {
    this.props.actions.completeTodo(this.props.todo.id);
    this.setState({checked: !this.state.checked})
  }
  
  onClickDelete() {
    this.props.actions.deleteTodo(this.props.todo.id);
  }
  
  onChangeTitle(e) {
    this.setState({title: e.target.value})
  }
  
  onKeyDownEnter(e) {
    if(e.which === 13) {
      this.handleUpdate()
    }
  }
  
  onFocus(e) {
    this.setState({
      focused: true
    })
  }
  
  onBlur(e) {
    this.setState({
      focused: false
    })
    this.handleUpdate()
  }

  handleUpdate() {
    if (this.state.title !== '') {
      this.props.actions.updateTodo(this.props.todo.id, this.state.title);
    }
  }

  render() {
    return (
      <li className="todo__item">
        <input type="checkbox"
         defaultChecked={this.state.completed}
         required={true}
         onClick={this.onClickComplete.bind(this)}/>

        <input type="text"
         onChange={this.onChangeTitle.bind(this)}
         onKeyDown={this.onKeyDownEnter.bind(this)}
         onFocus={ this.onFocus.bind(this) }
         onBlur={ this.onBlur.bind(this) }
         required={true}
         readOnly={!this.state.focused}
         placeholder='title'
         value={this.state.title}/>
        
        <button onClick={this.onClickDelete.bind(this)}>Delete</button>
      </li>
    )
  }
}
export default TodoItem