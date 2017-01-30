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

class ComponentEditor extends React.Component {
  render() {
    return (
      <div className="ComponentEditor-Root">
        <h3>Page Settings</h3>
        <h4>Drawer Settings</h4>
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
  // ActiveComponent: state.ActiveComponent,
  // ActivePage: state.ActivePage
});

const mapDispatchToProps = ({
  // editActiveComponent,
  // setActiveComponent
});

const ComponentEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentEditor);

export default ComponentEditorContainer;
