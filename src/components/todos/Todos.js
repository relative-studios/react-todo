import React, { Component } from 'react'
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import './Todos.scss';
import AddTodo from './AddTodo';

class Todos extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    this.getTodoItems();
  }

  getTodoItems = () => {
    fetch('http://localhost:5000/api/todos', {method: 'GET'})
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
      todos.push(<TodoItem key={todo._id} todo={todo} deleteTodoItem={this.handleDeleteTodoItem}/>);
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
      .then(() => {
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
    this.setState(prevState => {
      return {
        todos: [
          {
            userId: 'tn9nex',
            todoItem: {
              id: new Date().getTime(),
              title: task,
              completed: false
            }
          },
          ...prevState.todos
        ]
      }
    })
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


  /*
  HANDLE EDIT TODO ITEM
  HANDLE EDIT TODO ITEM
  */

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
            <div className="col-12">
              <div className="mx-3 mx-sm-0">
                {this.renderTodoItems()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// setting state for app
const mapStateToProps = state => ({
  // todos: state.todos
});

export default connect(mapStateToProps, {})(Todos);