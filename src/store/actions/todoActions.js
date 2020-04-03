import { SET_TODOS } from '../reducers/types';

// Actions send a payload to their perspective reducer where the data gets manipulated in the store

export const setInitialTodos = (todoItems) => dispatch => {
  console.log('here');
  console.log(todoItems);
  dispatch({
    type: SET_TODOS,
    payload: todoItems
  })
}