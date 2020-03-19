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

    /* 
      Since rendering gets triggered on state changes, we are setting the component state
      to be the same as the store equivalent values. This means that when any of the store
      values change, the todos component will re-render. 
    */
    this.state = {
      todos: this.props.todos,
      todo: this.props.todo,
      id: this.props.id
    }
  }

  // fires fetchTodos action after component mounts
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    // When component renders, a new todoItems array gets built from store todos value
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
  todo: PropTypes.object,
  id: PropTypes.number
}

// setting state for app
const mapStateToProps = state => ({
  todos: state.todos.todos,
  todo: state.todos.todo
})

export default connect(mapStateToProps, { fetchTodos })(Todos);