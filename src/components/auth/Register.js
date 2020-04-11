import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../store/actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
      this.props.history.push("/dashboard");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log('newUser: ', newUser);
    this.props.registerUser(newUser, this.props.history); 
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
                    <h4>Register below</h4>
                    <p className="grey-text text-darken-1">
                      Already have an account? <Link to="/login">Log in</Link>
                    </p>
                  </div>
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        className={classnames("form-control", "mb-2", {
                          invalid: errors.name
                        })}
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id="name"
                        type="text"
                        placeholder="Name"
                      />
                      <input
                        className={classnames("form-control", "mb-2", {
                          invalid: errors.email
                        })}
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                      <input
                        className={classnames("form-control", "mb-2", {
                          invalid: errors.password
                        })}
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                      <input
                        className={classnames("form-control", "mb-2", {
                          invalid: errors.password2
                        })}
                        onChange={this.onChange}
                        value={this.state.password2}
                        error={errors.password2}
                        id="password2"
                        type="password"
                        placeholder="Confirm Password"
                      />
                      <span className="text-danger">{ errors.password2 }</span>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-large btn-info"
                      >
                        Sign up
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));