import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'font-awesome/css/font-awesome.css';
import './index.css';
import Editor from './Components/App/App';

import Pages from './Components/Pages/Pages';
import Design from './Components/Design/Design';
import Navigation from './Components/Navigation/Navigation';
import reducer from './Reducers';

injectTapEventPlugin();

const store = createStore(reducer);

const App = ({ sidebar }) => (
  <div className="Index-root">
    {sidebar && (
      <div className="Sidebar">
        {sidebar}
      </div>
    )}
    <Editor />
  </div>
);

App.propTypes = {
  sidebar: React.PropTypes.object.isRequired
};

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
