import React, { Component } from 'react'

class TodoItem extends Component {
  handleClickTodo() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <p className="todo-text" >{this.props.todo.title} &nbsp;
          <input type="checkbox" checked={this.props.todo.completed} onChange={this.handleClickTodo} /> 
        </p>
      </div>
    )
  }
}

export default TodoItem;