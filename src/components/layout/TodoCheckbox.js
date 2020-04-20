import React from 'react';
import './TodoCheckbox.scss'

function TodoCheckbox(props) {
  const {isClicked, toggleClick, id}=props;

  const todoItemColor = (num) => {
      return  (num % 2 === 0) ? 'primary' : 
              (num % 3 === 0) ? 'secondary' : 
              (num % 4 === 0) ? 'success' : 
              (num % 5 === 0) ? 'warning' : 'info';
    }

  return (
    <div>
      <div className={`pointer float-left todo-checkbox bg-${todoItemColor(id)}`} onClick={toggleClick}>
      <svg className="todo-checkbox p-1" visibility={isClicked ? 'visible':'hidden'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
      </div>
      
    </div>
  )
}

export default TodoCheckbox;
