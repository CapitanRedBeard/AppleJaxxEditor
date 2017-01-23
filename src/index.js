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

const Root = ({ SidebarPanel }) => (
  <div className="Index-root">
    {SidebarPanel && (
      <div className="SidebarPanel">
        {SidebarPanel}
      </div>
    )}
    <Editor />
  </div>
);

Root.propTypes = {
  SidebarPanel: React.PropTypes.object.isRequired
};

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <Route path="pages" components={{ SidebarPanel: Pages }} />
          <Route path="design" components={{ SidebarPanel: Design }} />
          <Route path="navigation" components={{ SidebarPanel: Navigation }} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
