import React from 'react';
import { Link } from 'react-router'

import './Sidebar.css';

class SideBar extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="Sidebar-root">
        <div className="Sidebar-container">
          <h3>
            <Link to="pages">
              Pages
            </Link>
          </h3>
          <h3>
            <Link to="design">
              Design
            </Link>
          </h3>
          <h3>
            <Link to="navigation">
              Navigation
            </Link>
          </h3>
        </div>
      </div>
    );
  }
}

export default SideBar;