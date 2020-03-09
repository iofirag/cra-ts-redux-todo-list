import React, { Component } from 'react'

interface Props {
  addTodo: Function
}
interface State {
  title: string
}

class TodoInput extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  onChangeTitle(e) {
    this.setState({title: e.target.value})
  }

  onKeyDownEnter(e) {
    if(e.which === 13) {
      if (this.props.addTodo) {
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
      }
    }
  }

  render() {
    return (
    <div className="todo__input">
      <div className="title">
        <input 
         type="text"
         placeholder="title.."
         required={true}
         value={this.state.title}
         onKeyDown={this.onKeyDownEnter.bind(this)}
         onChange={this.onChangeTitle.bind(this)}
        />
      </div>
    </div>
    )
  }
}

export default TodoInput