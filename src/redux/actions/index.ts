export enum TodoOPerations {
  'ADD_TODO',
  'COMPLETE_TODO',
  'DELETE_TODO',
  'UPDATE_TODO'
}

let startId = 0;
let actions = {
  addTodo: (title) => {
    return {
      type: TodoOPerations.ADD_TODO,
      title: title,
      id: startId++
    }
  },
  completeTodo: (id) => {
    return {
      type: TodoOPerations.COMPLETE_TODO,
      id
    }
  },
  deleteTodo: (id) => {
    return {
      type: TodoOPerations.DELETE_TODO,
      id
     }
  },
  updateTodo: (id, title) => {
    return {
      type: TodoOPerations.UPDATE_TODO,
      id,
      title
    }
  }
}
export default actions