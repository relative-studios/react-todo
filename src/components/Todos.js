import React, { Component } from 'react'
import './Todos.scss';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions/todoActions';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.todos,
      todo: this.props.todo
    }
  }
  // lifecycle methods
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const todoItems = Array.from(this.props.todos).map(todo => (
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

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  todo: PropTypes.object
}

// setting state for app
const mapStateToProps = state => ({
  todos: state.todos.todos,
  todo: state.todos.todo
})

export default connect(mapStateToProps, { fetchTodos })(Todos);