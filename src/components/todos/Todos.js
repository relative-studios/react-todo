import React, { Component } from 'react'
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import './Todos.scss';
import AddTodo from './AddTodo';
import store from "../../store/store";
import { getTodos } from '../../store/actions/todoActions';

class Todos extends Component {
  state = {
    userId: '',
    todos: []
  }

  componentDidMount() {
    store.dispatch(getTodos(this.props.userId));
  }

  renderTodoBuckets = () => {
    const statuses = ['-', 'in progress', 'complete'];
    const buckets = [];
    const todos = [];

    statuses.forEach((status) => {
      buckets.push(this.props.todos.filter((todo) => todo.todoItem.status.title === status))
    });
    
    buckets.forEach((bucket) => {
      if (bucket.length) {
        let tempArr = [];
        // build temp array holding current buckets todos
        bucket.forEach((todo) => {
          tempArr.push(<TodoItem key={todo.todoItem.id} todo={todo} updateTodoDate={this.updateInitialTodoDate} deleteTodoItem={this.handleDeleteTodoItem}/>);
        })

        // Build markup for bucket
        todos.push(
          <div className="row" key={bucket[0].todoItem.id}>
            <div className="mx-3 mx-sm-0 w-100">
              <div className="row">
                <div className="mx-3 mx-sm-0 w-100">
                  <div className="row">
                    <div className="col-7">
                      <p className="todo-header capitalize">
                        {bucket[0].todoItem.status.title === '-' ? 'Todo' : bucket[0].todoItem.status.title}
                      </p>
                    </div>
                    <div className="col-2 px-0 h-100 my-auto">
                      <p className="todo-header rounded-header left">Status</p>
                    </div>
                    <div className="col-2 px-0 my-auto d-block">
                      <p className="todo-header rounded-header right">Due Date</p>
                    </div>
                    <div className="col ml-auto d-block"></div>
                  </div>
                </div>
              </div>
              {
                // place the temp array with current buckets todos
                tempArr
              }
            </div>
          </div>
        )
        tempArr = [];
      }
    });

    return todos;
  }

  // TODO move this as a dispatch in the datePicker component
  /* 
  updateInitialTodoDate = (id, date) => {
    this.setState(state => {
      state.todos.filter(p => p._id === id)[0].todoItem.duedate = date
    })
  } 
  */

  handleDeleteTodoItem = (id) => {
    // Setting up base url for api call
    const url = new URL('http://localhost:5000/api/todos/delete');

    // Adding parameters to url
    url.searchParams.append('id', id);

    // Sending call to api
    fetch(url, {method: 'PUT'})
      .then(res => res.json())
      .then(response => {
        // TODO since we are not longer using local state, we need to update the global state

        // Setting new local state of todos
        /* 
        this.setState(prevState => {
          return {
            todos: prevState.todos.filter(p => p._id !== id)
          };
        }); 
        */
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleAddTodoItem = (task) => {
    // Setting up base url for api call
    const url = new URL('http://localhost:5000/api/todos/add');
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
      .then(todo => {
        // TODO since we are not longer using local state, we need to update the global state

        // Setting new local state of todos
        /* 
        this.setState(prevState => {
          return {
            todos: [
              {
                _id: todo._id,
                userId: this.props.userId,
                todoItem: {
                  id: new Date().getTime(),
                  title: task,
                  completed: false,
                  duedate: "",
                  status: {
                    title: "-",
                    background: "light"
                  }
                }
              },
              ...prevState.todos
            ]
          }
        }); 
        */
      })
      .catch(error => {
        console.log(error);
      });
  }

  // render the component
  render() {
    return (
      <div>
        <div className="py-3 text-center">
          <h1 className="mb-0 pb-0">TODOS</h1> 
        </div>
        <div className="container">
          <div className="row">
            <AddTodo addTodoItem = {this.handleAddTodoItem}/>
          </div>
          {
            this.renderTodoBuckets()
          }
        </div>
      </div>
    )
  }
}

// setting state for app
const mapStateToProps = state => ({
  userId: state.auth.user.username,
  todos: state.todos.todos
});

export default connect(mapStateToProps, {})(Todos);