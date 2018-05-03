import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Test from './Test';
import RouterComponent from './Router';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Test} />
      <Route path="/list" component={RouterComponent} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();