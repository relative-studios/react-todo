import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkTodo } from '../store/actions/todoActions';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: this.props.todo.completed
    }

    this.handleClickTodo = this.handleClickTodo.bind(this);
  }
  
  handleClickTodo() {
    this.props.checkTodo(this.props.todo.id);
    this.setState({ isChecked: this.props.todo.completed });
  }

  render() {
    return (
      <div>
        <p className="todo-text" >{this.props.todo.title} &nbsp;
          <input type="checkbox" value={this.props.todo.title} checked={this.state.isChecked} onChange={this.handleClickTodo} /> 
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  checkTodo: PropTypes.func,
  isChecked: PropTypes.bool
}

export default connect(null, { checkTodo })(TodoItem);