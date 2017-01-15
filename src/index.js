import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import 'font-awesome/css/font-awesome.css';
import Editor from './Components/App/App';

import Pages from './Components/Pages/Pages';
import Design from './Components/Design/Design';
import Navigation from './Components/Navigation/Navigation';
import reducer from './Reducers'

const store = createStore(reducer)

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
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="pages" components={{ sidebar: Pages }} />
          <Route path="design" components={{ sidebar: Design }} />
          <Route path="navigation" components={{ sidebar: Navigation }} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
