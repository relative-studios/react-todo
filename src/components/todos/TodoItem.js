import React, {Component} from 'react'
import TodoCheckbox from '../layout/TodoCheckbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.scss';
import PropTypes from 'prop-types';
import _ from 'lodash';

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
      .then(res => res.json())
      .then(response => {
        console.log(response);
      })
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
    this.setState({
      isInput: !this.state.isInput
    });
    
    this.updateTodoTitle();
  }

  render(){
    // User destructuring to grab todo item and deleteTodo method
    const { todo, deleteTodoItem } = this.props;
    
    // Update local state of isClicked
    const toggleClick = () => {
      this.setState({
        isClicked: !this.state.isClicked
      });
    }

    console.log(todo);
    

    return (
      <div className="clearfix my-3 py-3 bg-white row">
        <TodoCheckbox className="col " isClicked={this.state.isClicked} toggleClick={toggleClick} id={todo._id}/>
        <div className="float-right row col">
          <input disabled={!this.state.isInput} className={`w-100 todo-item .text-truncate d-block form-control col-9 offset-1`} value={this.state.todoTitle} onChange={e => this.onTodoChange(e.target.value)}/>

            <button className="editIcon btn col" onClick={this.handleToggleInput}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30px" height="30px"><path fill="#dff0fe" d="M5.982 29.309L8.571 26.719 13.618 31.115 10.715 34.019 2.453 37.547z"/><path fill="#4788c7" d="M8.595,27.403l4.291,3.737l-2.457,2.457l-7.026,3.001l3.001-7.003L8.595,27.403 M8.548,26.036 l-2.988,2.988l-4.059,9.474L11,34.44l3.351-3.351L8.548,26.036L8.548,26.036z"/><path fill="#4788c7" d="M3.805 33.13L1.504 38.5 6.888 36.201z"/><path fill="#b6dcfe" d="M30.062,5.215L32.3,2.978C32.931,2.347,33.769,2,34.66,2s1.729,0.347,2.36,0.978 c1.302,1.302,1.302,3.419,0,4.721l-2.237,2.237L30.062,5.215z"/><path fill="#4788c7" d="M34.66,2.5c0.758,0,1.471,0.295,2.007,0.831c1.107,1.107,1.107,2.907,0,4.014l-1.884,1.884 L30.77,5.215l1.884-1.884C33.189,2.795,33.902,2.5,34.66,2.5 M34.66,1.5c-0.982,0-1.965,0.375-2.714,1.124l-2.591,2.591 l5.428,5.428l2.591-2.591c1.499-1.499,1.499-3.929,0-5.428v0C36.625,1.875,35.643,1.5,34.66,1.5L34.66,1.5z"/><g><path fill="#b6dcfe" d="M11.346,33.388c-0.066-0.153-0.157-0.308-0.282-0.454c-0.31-0.363-0.749-0.584-1.31-0.661 c-0.2-1.267-1.206-1.803-1.989-1.964c-0.132-0.864-0.649-1.342-1.201-1.582l21.49-21.503l4.721,4.721L11.346,33.388z"/><path fill="#4788c7" d="M28.054,7.931l4.014,4.014L11.431,32.594c-0.242-0.278-0.638-0.59-1.261-0.748 c-0.306-1.078-1.155-1.685-1.983-1.943c-0.151-0.546-0.447-0.968-0.821-1.272L28.054,7.931 M28.053,6.517L5.56,29.023 c0,0,0.007,0,0.021,0c0.197,0,1.715,0.054,1.715,1.731c0,0,1.993,0.062,1.993,1.99c1.982,0,1.71,1.697,1.71,1.697l22.482-22.495 L28.053,6.517L28.053,6.517z"/></g><g><path fill="#dff0fe" d="M29.107 4.764H34.685V11.440999999999999H29.107z" transform="rotate(-45.009 31.895 8.103)"/><path fill="#4788c7" d="M31.507,4.477l4.014,4.014l-3.237,3.237L28.27,7.714L31.507,4.477 M31.507,3.063l-4.651,4.651 l5.428,5.428l4.651-4.651L31.507,3.063L31.507,3.063z"/></g></svg>
            </button>


            <FontAwesomeIcon 
              icon={faTrashAlt} 
              size="lg" 
              color="danger" 
              className="float-right text-danger pointer col"
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

