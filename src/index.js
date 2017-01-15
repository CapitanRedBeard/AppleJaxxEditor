import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import './index.css';
import Editor from './Components/App/App';

import Pages from './Components/Pages/Pages';
import Design from './Components/Design/Design';
import Navigation from './Components/Navigation/Navigation';

const App = ({ sidebar }) => (
  <div className="Index-root">
    {sidebar && (
      <div className="Sidebar">
        {sidebar}
      </div>
    )}
    <Editor />
  </div>
)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="pages" components={{ sidebar: Pages }} />
      <Route path="design" components={{ sidebar: Design }} />
      <Route path="navigation" components={{ sidebar: Navigation }} />
    </Route>
  </Router>,
  document.getElementById('root')
);
