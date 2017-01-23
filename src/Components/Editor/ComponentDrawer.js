import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import './ComponentDrawer.css';
import { addComponent } from '../../Actions';
import schema from './../../Schema/combined.json';

class ComponentDrawer extends React.Component {
  onAddClick() {
    this.props.addComponent(this.props.ActivePage, this.props.currentPage.components.length, {
      type: 'text',
      style: {
        fontSize: 20,
        color: '#254E70'
      },
      text: 'Default Value'
    });
  }

  render() {
    const allowedComponentsOnPage = schema.properties.pages.items.properties.components.anyOf;

    return (
      <div className="AddComponent-Container">
        <div className="AddComponent-Options">
          {_.map(allowedComponentsOnPage, component => (
            <div key={component.properties.type.enum[0]} className="AddComponent-Option">
              {component.properties.type.enum[0]}
            </div>
          ))}
        </div>

        <RaisedButton
          label="Add Component"
          onClick={this.onAddClick.bind(this)}
        />
      </div>
    );
  }
}

ComponentDrawer.defaultProps = {

};

ComponentDrawer.propTypes = {
  ActivePage: React.PropTypes.string.isRequired,
  addComponent: React.PropTypes.func.isRequired,
  currentPage: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const currentPage = state.Mock.pages.find(page => page.name === state.ActivePage);

  return {
    ActivePage: state.ActivePage,
    currentPage
  };
};

const mapDispatchToProps = ({
  addComponent
});

const ComponentDrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentDrawer);

export default ComponentDrawerContainer;
