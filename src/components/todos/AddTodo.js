import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true
    };
  }

  render(){
    const { addTodoItem }=this.props;
    let userInput = React.createRef();

    const handleIsValid = () => {
      let validUserInput = userInput.current.value;
      
      if(validUserInput.length <= 3){
        this.setState({ isDisabled: true });
      }
      else if(validUserInput.length > 3){
        this.setState({ isDisabled: false });
      } 
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      addTodoItem(userInput.current.value, this.props.userId);
      e.currentTarget.reset();
      handleIsValid();
    }

    return (
      <form className="w-100" onSubmit={handleSubmit} onChange={handleIsValid}>
        <div className="row">
          <div className="col-12 col-md-10 mb-2">
            <div className="mx-3 mx-sm-0">
              <input 
                type="text"
                className="form-control"
                ref={userInput}
                placeholder="Enter a new task" 
              />
            </div>
          </div>
          <div className="col-12 col-md-2 mb-2">
            <div className="mx-3 mx-sm-0">
              <button
                className={`w-100 btn btn-primary ${this.state.isDisabled ? 'disabled' : ''}`}
                type="submit"
                value="Add task"
                disabled={this.state.isDisabled}
              >
                Add Task
              </button>  
            </div>
          </div>
        </div>
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
  userInput: PropTypes.string
}

const mapStateToProps = state => ({
  userId: state.auth.user.username
});

export default connect(mapStateToProps)(AddTodo)

