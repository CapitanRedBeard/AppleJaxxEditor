import React from 'react';
import { Link, withRouter } from 'react-router';
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
];

const Section = (props) => {
  const className = makeClass({
    'Sidebar-sectionLink': true,
    'Sidebar-active': props.current.includes(props.route)
  });

  return (
    <h3>
      <Link to={props.route} className={className}>
        <i className={`fa ${props.icon} fa-lg`} />
      </Link>
    </h3>
  );
};

Section.defaultProps = {
  current: ''
};

Section.propTypes = {
  route: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  current: React.PropTypes.string
};

const SideBar = props => (
  <div className="Sidebar-root">
    <div className="Sidebar-container">
      {sections.map(section => (
        <Section {...section} current={props.location.pathname} key={section.route} />
      ))}
    </div>
  </div>
);

SideBar.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default withRouter(SideBar);
