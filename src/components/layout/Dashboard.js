import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
            <div className="row">
              <div className="col-12 text-center">
                <h4>
                  <b>Hello, {user.name.split(" ")[0]}</b>
                  <br />           
                  This will be the users Dashboard!{" "}
                </h4>
                <button
                  onClick={this.onLogoutClick}
                  className="btn btn-large btn-warning m-2"
                >
                  Logout
                </button>
                <Link
                  to="/todos"
                  className="btn btn-large btn-info m-2"
                >
                  Todos
                </Link>
              </div>
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