import { combineReducers } from 'redux'
import Pages from './Pages'

const editorApp = combineReducers({
  pages: Pages
})

export default editorApp
