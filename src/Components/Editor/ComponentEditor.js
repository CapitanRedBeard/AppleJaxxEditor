import React from 'react';

import _ from 'underscore';
import underscoreDeepExtend from 'underscore-deep-extend';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

import './ComponentEditor.css';
import { editActiveComponent, setActiveComponent } from '../../Actions';
import ComponentDrawer from './ComponentDrawer';
import PageSettings from './PageSettingsEditor';

_.mixin({ deepExtend: underscoreDeepExtend(_) });

function createDeepObject(propertyList, value) {
  return _.reduceRight(propertyList, (result, prop) => ({
    [prop]: _.keys(result).length === 0 ? value : result
  }), {});
}

class ComponentEditor extends React.Component {
  onTextChange(property, ev) {
    const newComponent = _.deepExtend(
      {},
      this.props.ActiveComponent.component,
      createDeepObject(property, ev.currentTarget.value)
    );

    this.props.editActiveComponent(this.props.ActiveComponent.page, this.props.ActiveComponent.index, newComponent);
  }

  onDropdownChange(property, options, ev, index, selectValue) {
    const newComponent = _.deepExtend(
      {},
      this.props.ActiveComponent.component,
      createDeepObject(property, { selected: [selectValue], enum: options })
    );

    this.props.editActiveComponent(this.props.ActiveComponent.page, this.props.ActiveComponent.index, newComponent);
  }

  onToggleChange(property, ev) {
    const newComponent = _.deepExtend(
      {},
      this.props.ActiveComponent.component,
      createDeepObject(property, ev.currentTarget.checked)
    );

    this.props.editActiveComponent(this.props.ActiveComponent.page, this.props.ActiveComponent.index, newComponent);
  }

  getAttributes(component, parent = []) {
    const attributes = [];

    _.forEach(component, (value, property) => {
      if (property === 'style' || property === 'eval') {
        return;
      }

      if (_.isString(value) || _.isNumber(value)) {
        attributes.push(
          <TextField
            key={property}
            value={value}
            style={{ width: '250px' }}
            floatingLabelText={property}
            onChange={_.bind(this.onTextChange, this, [...parent, property])}
            floatingLabelFixed
            disabled={property === 'type'}
          />
        );
      } if (_.isBoolean(value)) {
        attributes.push(
          <Toggle
            label={property}
            key={property}
            onToggle={_.bind(this.onToggleChange, this, [...parent, property])}
          />
        );
      } else if (_.isObject(value) && !_.isArray(value) && value.enum) {
        attributes.push(
          <SelectField
            key={property}
            floatingLabelText={property}
            value={value.selected ? value.selected[0] : value.items[0]}
            floatingLabelFixed
            onChange={_.bind(this.onDropdownChange, this, [...parent, property], value.enum)}
          >
            {_.map(value.enum, attributeEnum => (
              <MenuItem value={attributeEnum} primaryText={attributeEnum} key={attributeEnum} />
            ))}
          </SelectField>
        );
      } else if (_.isObject(value) && !_.isArray(value)) {
        const attr = this.getAttributes(value, [...parent, property]);

        if (attr.length) {
          attributes.push(<h4 key={`${property}Title`}>{property}</h4>);
          attr.forEach((attribute) => {
            if (!_.find(attributes, knownAttribute => knownAttribute.key === attribute.key)) {
              attributes.push(attribute);
            }
          });
        }
      } else if (_.isObject(value) && _.isArray(value)) {

      }
    });

    return attributes;
  }

  render() {
    if (!this.props.ActivePage) {
      return null;
    }

    if (!this.props.ActiveComponent.component) {
      return <PageSettings />;
    }

    return (
      <div className="ComponentEditor-Root">
        <a className="BackToPageSettings" href="#" onClick={() => this.props.setActiveComponent(this.props.ActivePage)}>
          <i className="fa fa-chevron-left" aria-hidden="true" />  Page Settings
        </a>

        <h3>Component Editor</h3>

        {this.getAttributes(this.props.ActiveComponent.component)}

        <ComponentDrawer />
      </div>
    );
  }
}

ComponentEditor.defaultProps = {
  ActivePage: null
};

ComponentEditor.propTypes = {
  ActiveComponent: React.PropTypes.object.isRequired,
  ActivePage: React.PropTypes.string,
  editActiveComponent: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ActiveComponent: state.ActiveComponent,
  ActivePage: state.ActivePage
});

const mapDispatchToProps = ({
  editActiveComponent,
  setActiveComponent
});

const ComponentEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentEditor);

export default ComponentEditorContainer;


    // _.forEach(component, (value, property) => {
    //   if (property !== 'style' && property !== 'eval' && deeper) {
    //     if (_.isString(value) || _.isNumber(value)) {
    //       const ind = attributes.findIndex(attribute => attribute.key === property);
    //       if (ind > -1) {
    //         attributes.splice(ind, 1, (
    //           <TextField
    //             key={property}
    //             value={value}
    //             floatingLabelText={property}
    //             onChange={_.bind(this.onTextChange, this, property)}
    //             floatingLabelFixed
    //             disabled={property === 'type'}
    //           />)
    //         );
    //       } else {
    //         attributes.push(
    //           <TextField
    //             key={property}
    //             value={value}
    //             floatingLabelText={property}
    //             onChange={_.bind(this.onTextChange, this, property)}
    //             floatingLabelFixed
    //             disabled={property === 'type'}
    //           />
    //         );
    //       }
    //     } if (_.isBoolean(value)) {
    //       attributes.push(
    //         <Toggle label={property} key={property} />
    //       );
    //     } else if (_.isObject(value) && !_.isArray(value) && value.enum) {
    //       console.log(value, property)
    //       attributes.push(
    //         <SelectField
    //           key={property}
    //           floatingLabelText={property}
    //           value={value.selected ? value.selected[0] : value.items[0]}
    //           floatingLabelFixed
    //           onChange={_.bind(this.onDropdownChange, this, property, value.enum)}
    //         >
    //           {_.map(value.enum, attributeEnum => (
    //             <MenuItem value={attributeEnum} primaryText={attributeEnum} key={attributeEnum} />
    //           ))}
    //         </SelectField>
    //       );
    //     } else if (_.isObject(value) && !_.isArray(value)) {
    //       const attr = this.getAttributes(value, true);
    //       console.log(value, property, attr)
    //       if (attr.length) {
    //         attr.forEach((attribute) => {
    //           if (!_.find(attributes, knownAttribute => knownAttribute.key === attribute.key)) {
    //             attributes.push(attribute);
    //           }
    //         });
    //       }
    //     } else if (_.isObject(value) && _.isArray(value)) {

    //       // console.log(value, property)
    //       // if (value.length) {
    //       //   attributes.push(
    //       //     <SelectField
    //       //       key={property}
    //       //       floatingLabelText={property}
    //       //       value={value[0]}
    //       //       onChange={_.bind(this.onChange, this, property)}
    //       //     >
    //       //       {_.map(value.enum, attributeEnum => (
    //       //         <MenuItem value={attributeEnum} primaryText={attributeEnum} key={attributeEnum} />
    //       //       ))}
    //       //     </SelectField>
    //       //   );
    //       // }
    //     }
    //   }
    // });

