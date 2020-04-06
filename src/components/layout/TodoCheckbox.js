import React from 'react';
import './TodoCheckbox.scss'

function TodoCheckbox(props) {
  const {isClicked, toggleClick}=props;

  const classNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getClassName = (num) => {
    return (num === 1) ? 'primary' : 
           (num === 2) ? 'secondary' : 
           (num === 3) ? 'success' : 
           (num === 4) ? 'warning' : 'info';
  }

  return (
    <div className="col-2 container">
      <div className={`pointer float-left todo-checkbox bg-${getClassName(classNum(1,5))}`} onClick={toggleClick}>
      <svg visibility={isClicked ? 'visible':'hidden'} xmlns="http://www.w3.org/2000/svg" className="todo-checkbox" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
      </div>
      
    </div>
  )
}

export default TodoCheckbox;
