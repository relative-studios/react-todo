import { FETCH_TODOS, ADD_TODO } from '../reducers/types';

export const fetchTodos = () => dispatch => {
  // This grabs random todo items from test api
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(todos => {
      const todoItems = !Array.isArray(todos) ? new Array(todos) : todos;

      dispatch({
        type: FETCH_TODOS,
        payload: todoItems
      })
    })
}

// this adds the new todoItem to the todos state
export const addTodo = (todo) => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: todo
  });
}