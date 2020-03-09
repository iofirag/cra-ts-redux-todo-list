import { Todo } from "../../models/Todo";
import { TodoOPerations } from "../actions";

interface IAppState {
  todos: Todo[];
}
const initialState: IAppState = {
  todos: []
};

const todoReducer = (state: IAppState = initialState, action) => {
  switch(action.type) {
    case TodoOPerations.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.title,
            isCompleted: false,
          }
        ]
      }

    case TodoOPerations.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.id)? {...todo, completed: true} : todo)
      };

    case TodoOPerations.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    
    case TodoOPerations.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.id)? {...todo, title: action.title} : todo)
      }

    default:
      return state
  }
}

export default todoReducer