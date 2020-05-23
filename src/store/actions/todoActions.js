import { SET_TODOS, UPDATE_STATUS } from "./types";

// Set logged in user
export const getTodos = (id) => dispatch => {
  const url = new URL('http://localhost:5000/api/todos');
  let todoItems = [];
  url.searchParams.append('userId', id);

  fetch(url, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(todos => {
      todoItems = todos;
      dispatch({
        type: SET_TODOS,
        payload: todoItems
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateStatus = (index, title, background) => {
  const payload = {
    index,
    title,
    background
  }
  
  return {
    type: UPDATE_STATUS,
    payload 
  }
}