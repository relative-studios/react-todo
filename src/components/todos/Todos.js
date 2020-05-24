import React, { Component } from 'react'
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import './Todos.scss';
import AddTodo from './AddTodo';
import store from "../../store/store";
import { getTodos } from '../../store/actions/todoActions';

class Todos extends Component {
  state = {
    userId: '',
    todos: []
  }

  componentDidMount() {
    store.dispatch(getTodos(this.props.userId));
  } 

  renderTodoBuckets = () => {
    const statuses = ['-', 'in progress', 'complete'];
    const buckets = [];
    const todos = [];

    statuses.forEach((status) => {
      buckets.push(this.props.todos.filter((todo) => todo.todoItem.status.title === status))
    });
    
    buckets.forEach((bucket) => {
      if (bucket.length) {
        let tempArr = [];
        // build temp array holding current buckets todos
        bucket.forEach((todo) => {
          tempArr.push(<TodoItem key={todo.todoItem.id} todo={todo}/>);
        })

        // Build markup for bucket
        todos.push(
          <div className="row" key={bucket[0].todoItem.id}>
            <div className="mx-3 mx-sm-0 w-100">
              <div className="row">
                <div className="mx-3 mx-sm-0 w-100">
                  <div className="row">
                    <div className="col-7">
                      <p className="todo-header capitalize">
                        {bucket[0].todoItem.status.title === '-' ? 'Todo' : bucket[0].todoItem.status.title}
                      </p>
                    </div>
                    <div className="col-2 px-0 h-100 my-auto">
                      <p className="todo-header rounded-header left">Status</p>
                    </div>
                    <div className="col-2 px-0 my-auto d-block">
                      <p className="todo-header rounded-header right">Due Date</p>
                    </div>
                    <div className="col ml-auto d-block"></div>
                  </div>
                </div>
              </div>
              {
                // place the temp array with current buckets todos
                tempArr
              }
            </div>
          </div>
        )
        tempArr = [];
      }
    });

    return todos;
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
            <AddTodo addTodoItem={this.handleAddTodoItem} user={this.state.userId}/>
          </div>
          {
            this.renderTodoBuckets()
          }
        </div>
      </div>
    )
  }
}

// setting state for app
const mapStateToProps = state => ({
  userId: state.auth.user.username,
  todos: state.todos.todos
});

export default connect(mapStateToProps, {})(Todos);