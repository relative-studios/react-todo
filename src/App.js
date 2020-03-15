import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
