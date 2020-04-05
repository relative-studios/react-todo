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
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/todos" component={Todos} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
