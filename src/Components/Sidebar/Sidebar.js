import React from 'react';

import './Sidebar.css';

class SideBar extends React.Component {
  render() {
    return (
      <div className="Sidebar-root">
        <div className="Sidebar-container">
          <h3>Pages</h3>
          <h3>Design</h3>
          <h3>Commerce</h3>
          <h3>Navigation</h3>
        </div>
      </div>
    );
  }
}

export default SideBar;