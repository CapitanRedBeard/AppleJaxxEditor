import React from 'react';

import _ from 'underscore';
import underscoreDeepExtend from 'underscore-deep-extend';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import Popover from 'material-ui/Popover';

import './ComponentEditor.css';
import { editActiveComponent, setActiveComponent } from '../../Actions';
import ComponentDrawer from './ComponentDrawer';

class PageSettingsEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleTouchTap(event) {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div className="ComponentEditor-Root">
        <h3>Page Settings</h3>
        <h4>
          Drawer Settings  <i className="fa fa-info-circle fa-lg" onClick={this.handleTouchTap.bind(this)} />
        </h4>

        <Popover
          className="PopOverTip"
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
          <p>
            Any page can serve as a drawer on either side of your app. The drawer is usually presented to the user when a menu button is pressed.
          </p>
        </Popover>

        <ComponentDrawer />
      </div>
    );
  }
}

PageSettingsEditor.defaultProps = {
  ActivePage: null
};

PageSettingsEditor.propTypes = {
  ActivePage: React.PropTypes.string
};

const mapStateToProps = state => ({
  // ActiveComponent: state.ActiveComponent,
  // ActivePage: state.ActivePage
});

const mapDispatchToProps = ({
  // editActiveComponent,
  // setActiveComponent
});

const PageSettingsEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageSettingsEditor);

export default PageSettingsEditorContainer;
