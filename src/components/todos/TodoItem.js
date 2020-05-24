import React, {Component} from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-date-picker';
import Status from './Status';
import './TodoItem.scss';
import PropTypes from 'prop-types';
import store from "../../store/store";
import { deleteTodo } from '../../store/actions/todoActions';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoTitle: props.todo.todoItem.title,
      isInput: false,
      duedate: props.todo.todoItem.duedate,
      status: props.todo.todoItem.status || '-',
    }
  }

  handleDeleteTodoItem = (id) => {
    const url = new URL('http://localhost:5000/api/todos/delete');

    // Adding parameters to url
    url.searchParams.append('id', id);

    // Sending call to api 
    fetch(url, {method: 'PUT'})
      .then(res => res.json())
      .then(() => {
        // update status for active todo in global todos state
        store.dispatch(deleteTodo(this.props.todo._id))
      })
      .catch(error => {
        console.log(error);
      });
  }

  //Adds current id and title of current todoItem in local state and sends a put request to the database to update information
  updateTodoTitle = () => {
    const url = new URL('http://localhost:5000/api/todos/edit-title');
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

  //Adds current id and duedate of current todoItem in local state and sends a put request to the database to update information
  updateTodoDuedate = () => {
    const url = new URL('http://localhost:5000/api/todos/edit-duedate');
    // Adding parameters to url
    url.searchParams.append('id', this.props.todo._id);
    url.searchParams.append('duedate', this.state.duedate);

    fetch(url, {
      method: 'PUT'
    })
      .then(response => response)
      .catch(error => {
        console.log(error);
      });
  }

  onTodoTitleChange(value) {
    this.setState({
      todoTitle: value
    });
  }

  handleUpdateDuedate = duedate => {
    this.setState({duedate});
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
    const { todo, updateTodoDate } = this.props;

    // TODO create a constants file and start storing all config items in constants
    const statusOptions = [
      {
        title: '-',
        background: 'light'
      },
      {
        title: 'in progress',
        background: 'primary'
      },
      {
        title: 'complete',
        background: 'success'
      }
    ];

    let todoContent;
    let duedateDate;
    
    // Handling in case there is no duedate assigned
    if (this.state.duedate === "") {
      duedateDate="";
    } else {
      duedateDate=new Date(this.state.duedate);
    }
    
    const handleEnterKey = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
  
        this.handleToggleInput();
      }
    }

    if (this.state.isInput) {
      todoContent = <input 
                      className={`w-100 todo-item .text-truncate d-block form-control border-0`} 
                      value={this.state.todoTitle} 
                      onChange={e => this.onTodoTitleChange(e.target.value)} 
                      onKeyDown={handleEnterKey}
                    />;
    } else {
      todoContent = <p className={`w-100 todo-item .text-truncate d-block form-control border-0`}>{this.state.todoTitle}</p>
    }

    return (
      <div className="clearfix todo">
        <div className="row">
          <div className="col-7">
            <div className="has-overlay w-100">
              <div className={`overlay h-100 ${this.state.isInput ? 'd-none':'d-block'}`}>
                <FontAwesomeIcon 
                  icon={faPen} 
                  size="sm" 
                  color="secondary"  
                  className="pointer position-absolute img-fluid hover-icon"
                  onClick={this.handleToggleInput}
                />
              </div>
              {todoContent}
            </div>
          </div>
          <div className="col-2 h-100 my-auto">
            <Status 
              status={this.state.status} options={statusOptions} id={this.props.todo._id}
            />
          </div>
          <div className="col-2 px-0 my-auto d-flex">
            <div className="flex-center w-100">
              <DatePicker
                value={duedateDate}
                clearIcon={null}
                calendarIcon={null}
                className="date-picker"
                onChange={date => { this.handleUpdateDuedate(date); updateTodoDate(todo._id, date) }}
              />
            </div>
          </div>
          <div className="col ml-auto d-block">
            <FontAwesomeIcon 
              icon={faTrashAlt} 
              size="lg" 
              color="danger" 
              className="float-right text-danger pointer m-2 pr-1"
              onClick={() => this.handleDeleteTodoItem(todo._id)}
            />
          </div>
        </div>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired, 
}

// setting state for app
const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, {})(TodoItem);
