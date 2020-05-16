import React, { Component } from 'react'
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import './Todos.scss';
import AddTodo from './AddTodo';

class Todos extends Component {
  state = {
    userId: '',
    todos: []
  }

  componentDidMount() {
    this.getTodoItems();
  }

  getTodoItems = () => {
    const url = new URL('http://localhost:5000/api/todos');
    // Adding parameters to url
    url.searchParams.append('userId', this.props.userId);

    fetch(url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(todos => {
        const todoItems = !Array.isArray(todos) ? new Array(todos) : todos;
        this.setState({ todos: todoItems })
      })
      .catch(error => {
        console.log(error);
      });
  }


  renderTodoItems = () => {
    let todos = [];

    this.state.todos.forEach((todo) => {
      todos.push(<TodoItem key={todo.todoItem.id} todo={todo} deleteTodoItem={this.handleDeleteTodoItem}/>);
    });
    
    return todos;
  }

  handleDeleteTodoItem = (id) => {
    // Setting up base url for api call
    const url = new URL('http://localhost:5000/api/todos/delete');

    // Adding parameters to url
    url.searchParams.append('id', id);

    // Sending call to api
    fetch(url, {method: 'PUT'})
      .then(res => res.json())
      .then(response => {
        // Setting new local state of todos
        this.setState(prevState => {
          return {
            todos: prevState.todos.filter(p => p._id !== id)
          };
        });
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
        // Setting new local state of todos
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
                  status: "-"
                }
              },
              ...prevState.todos
            ]
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggleCompletedAt = index => {
    this.togglePropertyAt("completed", index);
  }

  togglePropertyAt = (property, indexToChange) => {
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        if (index === indexToChange) {
          return {
            ...todo,
            [property]: !todo[property]
          }
        }
        return todo;
      })
    })
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
          <div className="row">
            <div className="mx-3 mx-sm-0 w-100">
              {this.renderTodoItems()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// setting state for app
const mapStateToProps = state => ({
  userId: state.auth.user.username
});

export default connect(mapStateToProps, {})(Todos);