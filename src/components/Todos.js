import React, { Component } from 'react'
import './Todos.scss';

import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({todos: data});
    })
  }

  render() {
    const todoItems = Array.from(this.state.todos).map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    return (
      <div>
        <AddTodo />
        {todoItems}
      </div>
    )
  }
}

export default Todos;