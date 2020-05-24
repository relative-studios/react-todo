import {
  SET_TODOS,
  UPDATE_STATUS,
  DELETE_TODO,
  ADD_TODO
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
    case DELETE_TODO:
      const todosCopytoDelete = [...state.todos];

      return {
        ...state,
        todos: todosCopytoDelete.filter(todo => todo._id !== action.payload.id)
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [
          action.payload.todo,
          ...state.todos
        ]
      }
    default:
      return state;
  }
}