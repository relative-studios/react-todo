import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({addTodoItem}) => {

  let playerInput = React.createRef();
  let handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(playerInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <form className="w-100" onSubmit={handleSubmit}>
        <input 
          type="text"
          ref={playerInput}
          placeholder="Enter a new task" 
        />

        <input 
        type="submit"
        value="Add task"
        />
      </form>
  )
}

AddTodo.propTypes = {

}

export default AddTodo

