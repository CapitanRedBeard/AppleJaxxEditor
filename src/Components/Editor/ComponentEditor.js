import React from 'react';

import _ from 'underscore';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import './ComponentEditor.css';
import { editActiveComponent } from '../../Actions';

class ComponentEditor extends React.Component {
  onChange(ev) {
    const newComponent = _.extend({}, this.props.ActiveComponent.component, {
      text: ev.currentTarget.value
    });

    this.props.editActiveComponent(this.props.ActiveComponent.page, this.props.ActiveComponent.index, newComponent);
  }

  render() {
    if (!this.props.ActiveComponent.component) {
      return null;
    }

    return (
      <div className="ComponentEditor-Root">
        <h3>Component Editor</h3>

        {this.props.ActiveComponent.component.type && (
          <TextField
            defaultValue={this.props.ActiveComponent.component.type}
            floatingLabelText="Type"
            disabled
          />
        )}

        {this.props.ActiveComponent.component.text && (
          <TextField
            value={this.props.ActiveComponent.component.text}
            floatingLabelText="Text"
            onChange={this.onChange.bind(this)}
          />
        )}
      </div>
    );
  }
}

ComponentEditor.defaultProps = {

};

ComponentEditor.propTypes = {
  ActiveComponent: React.PropTypes.object.isRequired,
  editActiveComponent: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ActiveComponent: state.ActiveComponent
});

const mapDispatchToProps = ({
  editActiveComponent
});

const ComponentEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentEditor);

export default ComponentEditorContainer;
