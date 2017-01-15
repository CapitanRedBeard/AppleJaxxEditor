import React from 'react';

import './App.css';

import SideBar from '../Sidebar/Sidebar';
import EditorComponent from '../Editor/Editor';

const App = () => (
  <div className="App-root">
    <SideBar />
    <EditorComponent />
  </div>
);

export default App;
