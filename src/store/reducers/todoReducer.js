import {
  SET_TODOS,
  UPDATE_STATUS
} from "../actions/types";

const initialState = {
  todos: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case UPDATE_STATUS:
      let todoCopy = {};

      todoCopy = {
        ...state.todos[action.payload.index]
      };

      todoCopy.todoItem.status.title = action.payload.title;
      todoCopy.todoItem.status.background = action.payload.background

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload.index),
          todoCopy,
          ...state.todos.slice(action.payload.index + 1)
        ]
      }
    default:
      return state;
  }
}