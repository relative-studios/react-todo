import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

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

    console.log(newUser);
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
                        className="form-control mb-2"
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id="name"
                        type="text"
                        placeholder="Name"
                      />
                      <input
                        className="form-control mb-2"
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                      <input
                        className="form-control mb-2"
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                      <input
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.password2}
                        error={errors.password2}
                        id="password2"
                        type="password"
                        placeholder="Confirm Password"
                      />
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

export default Register;