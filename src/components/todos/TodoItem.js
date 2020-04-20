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
    }
  }

  componentDidMount() {
    this.updateTodoTitle();

  }

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
        <TodoCheckbox isClicked={this.state.isClicked} toggleClick={toggleClick} id={todo._id}/>
        <div className="float-right col-10 pt-2">
          <input className={`w-100 todo-item .text-truncate d-block form-control`} value={this.state.todoTitle} onChange={e => this.onTodoChange(e.target.value)}/>
            {/* {todo.todoItem.title} */}
            <FontAwesomeIcon 
              icon={faTrashAlt} 
              size="lg" 
              color="danger" 
              className="float-right text-danger pointer"
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

