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
    
    // Slicing to only show first 10 results for now
    this.state.todos.forEach((todo) => {
      todos.push(<TodoItem key={todo.todoItem.id} todo={todo.todoItem} deleteTodoItem={this.handleDeleteTodoItem}/>);
    });
    
    return todos;
  }

  handleDeleteTodoItem = (id) => {
    this.setState(prevState => {
        return {
          todos: prevState.todos.filter(p => p.todoItem.id !== id)
        };
    });
  }

  handleAddTodoItem = (task) => {
    let arrayLengthIndex = this.state.todos.length;

    this.setState(prevState => {
      return {
        todos: [
          {
            key: arrayLengthIndex+1,
            userId: 1,
            id: arrayLengthIndex+1,
            title: task,
            completed: false
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
      <div className="w-100">
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