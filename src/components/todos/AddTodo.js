import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({addTodoItem}) => {

  let userInput = React.createRef();
  let handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(userInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <form className="w-100 mt-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-10">
          <input 
            type="text"
            className="form-control"
            ref={userInput}
            placeholder="Enter a new task" 
          />
        </div>
        <div className="col-2">
          <input
            className="btn btn-primary w-100" 
            type="submit"
            value="Add task"
          />
        </div>
      </div>
    </form>
  )
}

AddTodo.propTypes = {
  userInput: PropTypes.string,
  addTodoItem: PropTypes.func
}

export default AddTodo

