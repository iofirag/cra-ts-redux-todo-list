export enum TodoOPerations {
  'ADD_TODO',
  'COMPLETE_TODO',
  'DELETE_TODO',
  'UPDATE_TODO'
}

let startId = 0;
export const addTodo = (title) => {
  return {
    type: TodoOPerations.ADD_TODO,
    title: title,
    id: startId++
  }
};
export const completeTodo = (id) => {
  return {
    type: TodoOPerations.COMPLETE_TODO,
    id
  }
}
export const deleteTodo = (id) => {
  return {
    type: TodoOPerations.DELETE_TODO,
    id
    }
}
export const updateTodo = (id, title) => {
  return {
    type: TodoOPerations.UPDATE_TODO,
    id,
    title
  }
}