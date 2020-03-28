import React from 'react';
import './TodoCheckbox.scss'

function TodoCheckbox() {
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
    <div className="col-2">
      <div className={`pointer float-left todo-checkbox bg-${getClassName(classNum(1,5))}`}></div>
    </div>
  )
}

export default TodoCheckbox;
