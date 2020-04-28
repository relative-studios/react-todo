import React, {Component} from 'react'
import TodoCheckbox from '../layout/TodoCheckbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenFancy} from '@fortawesome/free-solid-svg-icons';
import './TodoItem.scss';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      todoTitle: props.todo.todoItem.title,
      isInput: false
    }
  }

  //Adds current id and title of current todoItem in local state and sends a put request to the database to update information
  updateTodoTitle = () => {
    const url = new URL('http://localhost:5000/api/todos/edit');
    // Adding parameters to url
    url.searchParams.append('id', this.props.todo._id);
    url.searchParams.append('todoTitle', this.state.todoTitle);

    fetch(url, {
      method: 'PUT'
    })
      .then(response => response)
      .catch(error => {
        console.log(error);
      });
  }

  onTodoChange(value) {
    this.setState({
      todoTitle: value
    });
  }

  //When the edit svg is clicked, it keeps track of that click in local state to enable/disable input and fires off updateTodoTitle()
  handleToggleInput = () => {
    console.log('handleToggleInput Triggered');
    let input = this.state.isInput;

    this.setState({
      isInput: !this.state.isInput
    });

    input = !input;
    
    if (!input) {
      this.updateTodoTitle();
    }
  }

  

  render(){
    // User destructuring to grab todo item and deleteTodo method
    const { todo, deleteTodoItem } = this.props;

    let todoContent;
    
    // Update local state of isClicked
    const toggleClick = () => {
      this.setState({
        isClicked: !this.state.isClicked
      });
    }

    const handleEnterKey = (e) => {
      if (e.key === 'Enter') {
        console.log('HERE');
        e.preventDefault();
        e.stopPropagation();
  
        this.handleToggleInput();
      }
    }

    if (this.state.isInput) {
      todoContent = <input className={`w-100 todo-item .text-truncate d-block form-control`} 
                            value={this.state.todoTitle} 
                            onChange={e => this.onTodoChange(e.target.value)} 
                            onKeyDown={handleEnterKey}/>;
    } else {
      todoContent = <p className={`w-100 todo-item .text-truncate d-block form-control`}>{this.state.todoTitle}</p>
    }

    return (
      <div className="clearfix my-3 py-3 bg-white row">
        <div className="float-right col-11">
          <div className="has-overlay w-100">
            <div className={`overlay h-100 ${this.state.isInput ? 'd-none':'d-block'}`}>
              <FontAwesomeIcon 
                icon={faPenFancy} 
                size="lg" 
                color="secondary" 
                className="pointer position-absolute img-fluid hover-icon"
                onClick={this.handleToggleInput}
              />
            </div>
            {todoContent}
          </div>
        </div>
        <div className="col-1">
          <FontAwesomeIcon 
            icon={faTrashAlt} 
            size="lg" 
            color="danger" 
            className="float-right text-danger pointer mt-3"
            onClick={() => deleteTodoItem(todo._id)}
          />
        </div>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
  isClicked: PropTypes.bool
}

export default TodoItem

