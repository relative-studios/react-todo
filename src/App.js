import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./store/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/authActions";

import { Provider } from "react-redux";
import store from "./store/store";

import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Todos from './components/todos/Todos';
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/layout/Dashboard";
import Profile from "./components/layout/Profile";

function App() {
  // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);

    // Decode token and get user info and exp
    const decoded = jwt_decode(token);

    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
  }

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="row h-100">
            <div className="nav-container pr-0 position-relative">
              <Header className="header h-100 position-fixed" />
            </div>
            <div className="body-container pl-0 h-100 display-flex p-3">
              <div className="h-100 w-100 mobile-layout-fix">
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute exact path="/todos" component={Todos} />
                  <PrivateRoute exact path="/profile" component={Profile} />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
