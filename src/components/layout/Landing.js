import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row h-100">
          <div className="col-6 offset-3">
            <div className="d-flex h-100">
              <div className="flex-container">
                <div className="card w-100">
                  <div className="card-header">
                    <h2 className="text-center">Welcome!</h2>
                  </div>
                  <div className="card-body text-center">
                    <Link
                      to="/register"
                      className="btn btn-large btn-primary m-2"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="btn btn-large btn-info m-2"
                    >
                      Log In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;