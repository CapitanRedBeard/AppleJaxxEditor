import React from 'react';

import _ from 'underscore';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import './ComponentEditor.css';
import { editActiveComponent } from '../../Actions';
import ComponentDrawer from './ComponentDrawer';

class ComponentEditor extends React.Component {
  onChange(ev) {
    const newComponent = _.extend({}, this.props.ActiveComponent.component, {
      text: ev.currentTarget.value
    });

    this.props.editActiveComponent(this.props.ActiveComponent.page, this.props.ActiveComponent.index, newComponent);
  }

  render() {
    if (!this.props.ActivePage) {
      return null;
    }

    return (
      <div className="ComponentEditor-Root">
        <h3>Component Editor</h3>

        {this.props.ActiveComponent.component ? [
          <TextField
            key="type"
            defaultValue={this.props.ActiveComponent.component.type}
            floatingLabelText="Type"
            disabled
          />,
          <TextField
            key="text"
            value={this.props.ActiveComponent.component.text}
            floatingLabelText="Text"
            onChange={this.onChange.bind(this)}
          />
        ] : (
          <div>No components selected on this page, try selecting one on the page or adding one at the bottom.</div>
        )}

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
  editActiveComponent
});

const ComponentEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentEditor);

export default ComponentEditorContainer;
