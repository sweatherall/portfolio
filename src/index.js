import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('approot')
);
registerServiceWorker();
