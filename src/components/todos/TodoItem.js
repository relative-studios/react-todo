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

    const { todo, deleteTodoItem, id, isCompleted} = this.props;
    
    const toggleClick = () => {
      this.setState({
        isClicked: !this.state.isClicked
      });
      isCompleted(id-1);
    }

    return (
      <div className="clearfix my-3 py-3 bg-white row">
        <TodoCheckbox isClicked={this.state.isClicked} toggleClick={toggleClick} id={id}/>
        <div className="float-right col-10 pt-2">
          <h4 className={`w-100 ${this.state.isClicked ? 'strike':''}`}>
            {todo.title}
            <FontAwesomeIcon 
              icon={faTrashAlt} 
              size="lg" 
              color="danger" 
              className="float-right text-danger pointer"
              onClick={() => deleteTodoItem(todo.id)}
            />
          </h4>
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

