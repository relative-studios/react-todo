import { SET_TODOS } from './types'
import produce from "immer"

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS: {
      console.log(action.payload);
      return produce(state, draft => {
        draft = action.payload;
        console.log(draft);
      })
    }

    default:
      return state
  }
}