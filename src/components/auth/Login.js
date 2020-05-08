import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  static getDerivedStateFromProps(nextProps){
    if (nextProps.errors) {
      return { errors: nextProps.errors } 
    }

    return null;
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password,
    };

    // since we handle the redirect within our component 
    // we don't need to pass in this.props.history as a parameter
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
        <div className="row h-100">
          <div className="col-10 offset-1 col-md-6 offset-md-3 col-xl-4 offset-xl-4 text-center">
            <div className="d-flex h-100">
              <div className="flex-container">
                <div className="card w-100">
                  <div className="card-body">
                    <Link to="/" className="btn-flat waves-effect">Back to home</Link>
                    <div className="col-12">
                      <h4>Login below</h4>
                      <p className="text-secondary text-darken-1">
                        Don't have an account? <Link to="/register">Register</Link>
                      </p>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                          className={classnames("form-control", "mb-2", {
                            invalid: errors.usernameNotfound
                          })}
                          onChange={this.onChange}
                          value={this.state.username}
                          error={errors.username}
                          id="username"
                          type="text"
                          placeholder="Username"
                        />
                        <span className="red-text">
                          {errors.usernameNotfound}
                        </span>
                        <input
                          className={classnames("form-control", {
                            invalid: errors.password || errors.passwordincorrect
                          })}
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          id="password"
                          type="password"
                          placeholder="Password"
                        />
                        <span className="red-text">
                          {errors.password}
                          {errors.passwordincorrect}
                        </span>
                      </div>
                      <div className="form-group text-center">
                        <button
                          type="submit"
                          className="btn btn-large btn-info"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.any.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);