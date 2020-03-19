import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const allReducers = combineReducers({
  todos: todoReducer
});

export default allReducers;