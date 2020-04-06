import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Todos from './components/todos/Todos';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="row h-100">
          <div className="col-2 pr-0">
            <Header className="h-100" />
          </div>
          <div className="col-10 pl-0 h-100 display-flex">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/todos" component={Todos} />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
