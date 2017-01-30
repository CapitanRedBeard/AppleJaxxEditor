import React from 'react';
import _ from 'underscore';
import makeClass from 'classnames';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import './ComponentDrawer.css';
import { addComponent } from '../../Actions';
import schema from './../../Schema/combined.json';

const allowedComponentsOnPage = schema.properties.pages.items.properties.components.anyOf;

function generateDefaultJSON(baseSchema) {
  const result = {};

  _.forEach(baseSchema.properties, (propertySchema, property) => {
    if (propertySchema.type === 'boolean') {
      if (propertySchema.default) {
        _.extend(result, { [property]: propertySchema.default });
      } else if (!propertySchema.default) {
        _.extend(result, { [property]: false });
      }
    }

    if (propertySchema.type === 'integer') {
      if (propertySchema.default) {
        _.extend(result, { [property]: propertySchema.default });
      } else if (!propertySchema.default) {
        _.extend(result, { [property]: null });
      }
    }

    if (propertySchema.type === 'string') {
      if (propertySchema.enum) {
        _.extend(result, { [property]: propertySchema.enum[0] });
      } else if (propertySchema.default) {
        _.extend(result, { [property]: propertySchema.default });
      } else if (!propertySchema.default) {
        _.extend(result, { [property]: '' });
      }
    }

    if (propertySchema.type === 'object') {
      const hasADefault = _.find(propertySchema.properties, objectSchema => objectSchema.default !== null);

      if (propertySchema.default) {
        _.extend(result, { [property]: propertySchema.default });
      } else if (hasADefault) {
        _.extend(result, { [property]: generateDefaultJSON(propertySchema) });
      } else {
        _.extend(result, { [property]: {} });
      }
    }

    if (propertySchema.type === 'array') {
      if (propertySchema.default) {
        _.extend(result, { [property]: { items: propertySchema.default, enum: propertySchema.items.enum } });
      } else if (!propertySchema.default) {
        _.extend(result, { [property]: { items: [], enum: propertySchema.items.enum } });
      }
    }
  });

  return result;
}

class ComponentDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedComponent: null
    };
  }

  onAddClick() {
    if (this.state.selectedComponent) {
      this.props.addComponent(
        this.props.ActivePage,
        this.props.currentPage.components.length,
        generateDefaultJSON(this.state.selectedComponent)
      );
    }
  }

  render() {
    return (
      <div className="AddComponent-Container">
        <div className="AddComponent-Options">
          {_.map(allowedComponentsOnPage, component => (
            <div
              key={component.properties.type.enum[0]}
              onClick={() => this.setState({ selectedComponent: component })}
              className={makeClass(
                'AddComponent-Option',
                { 'AddComponent-Option-Selected': this.state.selectedComponent && component.properties.type.enum[0] === this.state.selectedComponent.properties.type.enum[0] }
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
