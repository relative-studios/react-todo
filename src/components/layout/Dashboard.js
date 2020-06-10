import React, { Component } from "react";
import path from 'path';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";

class Dashboard extends Component {
  state = {
    todos: {}
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  getLastWeeksTodos = (id) => {
    const url = new URL('http://localhost:5000/api/todos/last-week');
    url.searchParams.append('userId', id);

    fetch(url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(todos => {
        this.setState({'todos': todos});
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderList = (name) => {
    const todos = [];

    if (this.state.todos[name]) {
      this.state.todos[name].forEach(todo => {
       todos.push(<li className="list-group-item" key={todo.todoItem.id}>{todo.todoItem.title}</li>)
      });
    }

    return todos;
  }

  componentDidMount() {
    this.getLastWeeksTodos(this.props.auth.user.username);
  }

  render() {
    const { user } = this.props.auth;

    let pastDue = this.state.todos.pastDue;
    let completed = this.state.todos.completed;

    if (pastDue) pastDue = pastDue.length;
    if (completed) completed = completed.length;

    return (
      <div className="container">
        <div className="flex-container">
          <div className="w-100">
            <div className="row mb-4">
              <h3 className="text-center w-100">Hello {user.name}, Here's last week at a glance:</h3>
            </div>
            <div className="row mb-4">
              <div className="col-12 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <img class="card-img-top" src="completed.jpg" alt="image" />
                  <div className="card-body text-center">
                    <h5 className="card-title">{`${completed} ${completed > 1 ? 'Tasks' : 'Task'}`} completed</h5>
                    <p className="card-text">Nice going! You were able to complete 7 out of the 8 tasks you created.</p>
                    <ul className="list-group">
                     {this.renderList('completed')}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <img class="card-img-top" src="past-due.jpg" alt="image" />
                  <div className="card-body text-center">
                    <h5 className="card-title">{`${pastDue} ${pastDue > 1 ? 'Tasks' : 'Task'}`} Overdue</h5>
                    <p className="card-text">We can't always get to things on time, that's okay! Time to reschedule.</p>
                    <ul className="list-group">
                      {this.renderList('pastDue')}
                    </ul>
                  </div>
                </div>
              </div>
            </div>           
            <div className="row d-flex justify-content-center mt-3">
              <a href="/todos" className="btn btn-info text-center">Go to Tasks</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);