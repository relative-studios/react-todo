import React, { Component } from 'react'
import './Todos.scss';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions/todoActions';

class Todos extends Component {
  // lifecycle methods
  componentDidMount() {
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps) {
    // this lifecycle gets called if any new props are received in the component
    if (nextProps.newTodo) {
      this.props.todos.unshift(nextProps.newTodo);
    }
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
  newTodo: PropTypes.object
}

// setting state for app
const mapStateToProps = state => ({
  todos: state.todos.todos,
  newTodo: state.todos.todo
})

export default connect(mapStateToProps, { fetchTodos })(Todos);