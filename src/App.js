import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Todos from './components/Todos';
import { Provider } from 'react-redux';
import store from './store/store.js';

function App() {
  return (
    // The provider essentially provides the entire app with the global state
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="row">
            <Todos />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
