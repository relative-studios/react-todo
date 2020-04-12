import React, {Component} from 'react'
import TodoCheckbox from '../layout/TodoCheckbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.scss';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  state = {
    isClicked: false,
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

    return (
      <div className="clearfix my-3 py-3 bg-white row">
        <TodoCheckbox isClicked={this.state.isClicked} toggleClick={toggleClick} id={todo._id}/>
        <div className="float-right col-10 pt-2">
          <p className={`w-100 todo-item .text-truncate d-block ${this.state.isClicked ? 'strike':''}`}>
            {todo.todoItem.title}
            <FontAwesomeIcon 
              icon={faTrashAlt} 
              size="lg" 
              color="danger" 
              className="float-right text-danger pointer"
              onClick={() => deleteTodoItem(todo._id)}
            />
          </p>
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

