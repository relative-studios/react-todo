import React, {Component} from 'react'

class AddTodo  extends Component {
  state = {
    isDisabled: true
  };

  render(){
    const {addTodoItem}=this.props;
    let userInput = React.createRef();

    let handleIsValid = () => {
      let validUserInput = userInput.current.value;
      
      if(validUserInput.length <= 3){
        this.setState({ isDisabled: true });
      }
      else if(validUserInput.length > 3){
        this.setState({ isDisabled: false });
      } 
    }

    let handleSubmit = (e) => {
      e.preventDefault();
      addTodoItem(userInput.current.value);
      e.currentTarget.reset();
      handleIsValid();
    }

    return (
      <form className="w-100 mt-3" onSubmit={handleSubmit} onChange={handleIsValid}>
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
            <button
              className={`btn btn-primary ${this.state.isDisabled ? 'disabled' : ''}`}
              type="submit"
              value="Add task"
              disabled={this.state.isDisabled}
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default AddTodo

