import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="container">
        <div className="flex-container">
          <div className="w-100">
            <div className="row mb-4">
              <h3 className="text-center w-100">Hello {user.name}, Here's this week at a glance:</h3>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-3">
                <div className="card border-success">
                  <div className="card-body text-center">
                    <h5 className="card-title">7 Tasks completed</h5>
                    <p className="card-text">Nice going! You were able to complete 7 out of the 8 tasks you created.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-warning">
                  <div className="card-body text-center">
                    <h5 className="card-title">3 Tasks Due Soon</h5>
                    <p className="card-text">Be sure to take a look and determine if these can be completed on time!.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-danger">
                  <div className="card-body text-center">
                    <h5 className="card-title">1 Task Overdue</h5>
                    <p className="card-text">We can't always get to things on time, that's okay! Time to reschedule.</p>
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