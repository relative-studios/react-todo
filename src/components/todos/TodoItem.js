import React, {Component} from 'react'
import TodoCheckbox from '../layout/TodoCheckbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.scss';

class TodoItem extends Component {

  state = {
    isClicked: false
  }

  render(){

    const { todo, deleteTodoItem } = this.props;
    
    const toggleClick = () => {
      this.setState({
        isClicked: !this.state.isClicked
      });
    }

    return (
      <div className="clearfix my-3 py-3 bg-white row">
        <TodoCheckbox isClicked={this.state.isClicked} toggleClick={toggleClick}/>
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

export default TodoItem

