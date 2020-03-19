import { FETCH_TODOS, ADD_TODO, CHECK_TODO, REMOVE_TODO } from '../reducers/types';

// Actions send a payload to their perspective reducer where the data gets manipulated in the store

export const fetchTodos = () => dispatch => {
  // This grabs todo items from api then sends the fetched data to the reducer defined in type (FETCH_TODOS)
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

// this sends todo item to reducer defined in type (ADD_TODO)
export const addTodo = (todo) => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: todo
  });
}

// this sends id to reducer defined in type (CHECK_TODO)
export const checkTodo = (id) => dispatch => {
  dispatch({
    type: CHECK_TODO,
    payload: id
  })
}

export const removeTodo = (id) => dispatch => {
  console.log(id);
  dispatch({
    type: REMOVE_TODO,
    payload: id
  })
}