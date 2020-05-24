import { 
  SET_TODOS, 
  UPDATE_STATUS, 
  UPDATE_DUEDATE, 
  DELETE_TODO,
  ADD_TODO  
} from "./types";

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

export const deleteTodo = (id) => {
  const payload = {
    id
  }

  return {
    type: DELETE_TODO,
    payload 
  }
}

export const updateDuedate = (index, duedate) => {
  const payload = {
    index,
    duedate
  }

  return {
    type: UPDATE_DUEDATE,
    payload 
  }
}

export const addTodo = (todo) => {
  const payload = {
    todo
  }

  return {
    type: ADD_TODO,
    payload
  }
}