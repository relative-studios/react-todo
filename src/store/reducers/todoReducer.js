import { FETCH_TODOS, ADD_TODO, CHECK_TODO } from './types';

// initial global states
const intitialState = {
  todos: []
};

// setting up reducers
export default function(state = intitialState, action) {
  switch(action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case ADD_TODO:
      state.todos.unshift(action.payload);
      return {
        ...state,
        todo: action.payload
      }
    case CHECK_TODO:
      console.log(action.payload);
      state.todos.find(todo => todo.id === action.payload).completed = !state.todos.find(todo => todo.id === action.payload).completed
      return {
        ...state,
        todos: state.todos
      }

    default:
      return state;
  }
}