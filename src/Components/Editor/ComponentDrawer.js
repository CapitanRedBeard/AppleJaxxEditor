import React from 'react';
import _ from 'underscore';
import makeClass from 'classnames';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import './ComponentDrawer.css';
import { addComponent } from '../../Actions';
import schema from './../../Schema/combined.json';

const allowedComponentsOnPage = schema.properties.pages.items.properties.components.anyOf;

class ComponentDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedComponent: null
    };
  }

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
    return (
      <div className="AddComponent-Container">
        <div className="AddComponent-Options">
          {_.map(allowedComponentsOnPage, component => (
            <div
              key={component.properties.type.enum[0]}
              onClick={() => this.setState({ selectedComponent: component.properties.type.enum[0] })}
              className={makeClass(
                'AddComponent-Option',
                { 'AddComponent-Option-Selected': component.properties.type.enum[0] === this.state.selectedComponent }
              )}
            >
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
