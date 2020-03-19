import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { checkTodo } from '../store/actions/todoActions';

function TodoItem(props) {
  // gives us access to dispatch actions
  const dispatch = useDispatch();

  // sets initial state of isChecked to false
  const [isChecked, setIsChecked] = useState(false);

  // dispatches checkTodo action and updates state of isChecked
  const handleClickTodo = () => {
    dispatch(checkTodo(props.todo.id));
    setIsChecked(props.todo.completed);
  };

  // Render the component
  return (
    <div>
      <p className="todo-text" >{props.todo.title} &nbsp;
        <input type="checkbox" value={props.todo.title} checked={isChecked} onChange={handleClickTodo} /> 
      </p>
    </div>
  )
}

export default TodoItem;