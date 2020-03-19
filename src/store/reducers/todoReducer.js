import { FETCH_TODOS, ADD_TODO, CHECK_TODO, REMOVE_TODO } from './types';

// initial global states
const intitialState = {
  todos: []
};

/* 
  Reducers update store values. Often times the mutated values are determined by
  parameters passed in through the action that points to the reducer being used
*/
export default function(state = intitialState, action) {
  switch(action.type) {
    case FETCH_TODOS:
      // This grabs todos from api call in action, then updates the store value with the data returned
      return {
        ...state,
        todos: action.payload
      }
    case ADD_TODO:
      // push new todo value passed in action
      state.todos.unshift(action.payload);
      return {
        ...state,
        todo: action.payload
      }
    case CHECK_TODO:
      // update values of todo in todos array based on id passed in action
      state.todos.find(todo => todo.id === action.payload).completed = !state.todos.find(todo => todo.id === action.payload).completed
      return {
        ...state,
        id: action.payload
      }
    case REMOVE_TODO:
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      return {
        ...state,
        id: action.paylaod
      }

    // gotta have a default or the console will complain
    default:
      return state;
  }
}