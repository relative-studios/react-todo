import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import './Todos.scss';
import AddTodo from './AddTodo';

class Todos extends Component {
  state = {
    todos: this.props.todos
  }

  componentDidMount() {
    this.getTodoItems();
  }

  getTodoItems = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
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
      todos.push(<TodoItem key={todo.id} todo={todo} deleteTodoItem={this.handleDeleteTodoItem}/>);
    });
    
    return todos;
  }

  handleDeleteTodoItem = (id) => {
    this.setState(prevState => {
        return {
          todos: prevState.todos.filter(p => p.userId === 1 && p.id !== id)
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

  // render the component
  render() {
    return (
      <div className="w-100">
        <div className="py-3 bg-primary text-white text-center">
          <h1 className="mb-0">TODOS</h1>
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

// validate prop types 
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

// setting state for app
const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, {})(Todos);