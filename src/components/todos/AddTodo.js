import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddTodo  extends Component {
  state = {
    buttonType:"",
    buttonState:"btn btn-primary w-100 disabled"
  };

  render(){

    const {addTodoItem}=this.props;
  
    let userInput = React.createRef();

    let handleSubmit = (e) => {
      e.preventDefault();
      addTodoItem(userInput.current.value);
      e.currentTarget.reset();
      this.setState({buttonType:"null"});
    }

    let handleIsValid = () => {
      let validUserInput = userInput.current.value;
      let unvalidChar = new RegExp(/[;`~]/);
      let test = unvalidChar.test(validUserInput);
      
      if(test || userInput.current.value.length < 3){
        this.setState({buttonType:"null", buttonState:"btn btn-primary w-100 disabled"}) 
      }
      else if(userInput.current.value.length > 3){
        this.setState({buttonType:"submit", buttonState:"btn btn-primary w-100"});
      } 
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
            <input
              className={this.state.buttonState}
              type={this.state.buttonType}
              value="Add task"
            />
          </div>
        </div>
      </form>
    )
  }
}

export default AddTodo

