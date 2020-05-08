import { UPDATE_USER } from "./types";

export const updateUser = userData => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: userData
  })
};
