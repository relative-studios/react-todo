import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenFancy} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-date-picker';
import './TodoItem.scss';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      todoTitle: props.todo.todoItem.title,
      isInput: false,
      date: "",
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

  updateDate = date => {
    this.setState({date});
    console.log(this.state.date);
  }

  onTodoChange(value) {
    this.setState({
      todoTitle: value
    });
  }

  //When the edit svg is clicked, it keeps track of that click in local state to enable/disable input and fires off updateTodoTitle()
  handleToggleInput = () => {
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
    
    const handleEnterKey = (e) => {
      if (e.key === 'Enter') {
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
        <div className="float-right col-8">
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
        <div className="col-2 my-auto">

        <DatePicker 
          onChange={this.updateDate}
          value={this.state.date}
        />

        </div>
        <div className="col-1 ml-auto mr-5">
          <FontAwesomeIcon 
            icon={faTrashAlt} 
            size="lg" 
            color="danger" 
            className="float-right text-danger pointer my-2"
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

