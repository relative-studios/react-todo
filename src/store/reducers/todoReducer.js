import { FETCH_TODOS, ADD_TODO } from './types';

// initial global states
const intitialState = {
  todos: [],
  todo: {}
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
      return {
        ...state,
        todo: action.payload
      }

    default:
      return state;
  }
}