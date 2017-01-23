import React from 'react';

import _ from 'underscore';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './ComponentEditor.css';
import { editActiveComponent, addComponent } from '../../Actions';

class ComponentEditor extends React.Component {
  onAddClick() {
    this.props.addComponent(this.props.ActivePage, {
      type: 'text',
      style: {
        fontSize: 20,
        color: '#254E70'
      },
      text: 'Default Value'
    });
  }

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
            defaultValue={this.props.ActiveComponent.component.type}
            floatingLabelText="Type"
            disabled
          />,
          <TextField
            value={this.props.ActiveComponent.component.text}
            floatingLabelText="Text"
            onChange={this.onChange.bind(this)}
          />
        ] : (
          <div>No components selected on this page, try selecting one on the page or adding one at the bottom.</div>
        )}

        <div className="ComponentEditor-AddComponent-Container">
          <RaisedButton
            label="Add Component"
            onClick={this.onAddClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

ComponentEditor.defaultProps = {

};

ComponentEditor.propTypes = {
  ActiveComponent: React.PropTypes.object.isRequired,
  ActivePage: React.PropTypes.string.isRequired,
  editActiveComponent: React.PropTypes.func.isRequired,
  addComponent: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ActiveComponent: state.ActiveComponent,
  ActivePage: state.ActivePage
});

const mapDispatchToProps = ({
  editActiveComponent,
  addComponent
});

const ComponentEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentEditor);

export default ComponentEditorContainer;
