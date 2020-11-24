import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import store from "../../store/store";
import { addTodo } from '../../store/actions/todoActions';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true
    };
  }

  // TODO move this to AddTodo component
  handleAddTodoItem = (task) => {
    // Setting up base url for api call
    const url = new URL('/api/todos/add');
    const todoBody = {
      task,
      userId: this.props.userId
    }

    // Sending call to api
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoBody)
    })
      .then(res => res.json())
      .then((todo) => {
        // update status for active todo in global todos state
        store.dispatch(addTodo(todo))
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){
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
      this.handleAddTodoItem(userInput.current.value);
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
                className={`w-100 btn btn-info ${this.state.isDisabled ? 'disabled' : ''}`}
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
  userInput: PropTypes.string
}

const mapStateToProps = state => ({
  userId: state.auth.user.username
});

export default connect(mapStateToProps)(AddTodo)

