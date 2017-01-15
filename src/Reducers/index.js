import { combineReducers } from 'redux';
import ActivePage from './ActivePage';
import Mock from './Mock';

const editorApp = combineReducers({
  ActivePage,
  Mock
});

export default editorApp;
