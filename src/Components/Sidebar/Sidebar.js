import React from 'react';
import { Link, withRouter } from 'react-router'
import makeClass from 'classnames';

import './Sidebar.css';

const sections = [
  {
    route: 'pages',
    icon: 'fa-file'
  },
  {
    route: 'design',
    icon: 'fa-paint-brush'
  },
  {
    route: 'navigation',
    icon: 'fa-arrow-circle-right'
  }
]

const Section = (props) => {
  const className = makeClass({
    "Sidebar-sectionLink": true,
    "Sidebar-active": props.current.includes(props.route)
  });

  return (
    <h3>
      <Link to={props.route} className={className}>
        <i className={`fa ${props.icon} fa-lg`} />
      </Link>
    </h3>
  )
}

class SideBar extends React.Component {
  render() {
    return (
      <div className="Sidebar-root">
        <div className="Sidebar-container">
          {sections.map(section => (
            <Section {...section} current={this.props.location.pathname} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(SideBar);
