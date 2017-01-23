import { combineReducers } from 'redux';
import ActivePage from './ActivePage';
import ActiveComponent from './ActiveComponent';
import Mock from './Mock';

const editorApp = combineReducers({
  ActivePage,
  ActiveComponent,
  Mock
});

export default editorApp;
