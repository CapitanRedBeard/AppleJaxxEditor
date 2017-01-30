import React from 'react';

import _ from 'underscore';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import Popover from 'material-ui/Popover';

import './ComponentEditor.css';
import { setDrawerSide, setDrawerAnimation } from '../../Actions';
import ComponentDrawer from './ComponentDrawer';
import drawerSchema from './../../Schema/components/drawer.json';

class PageSettingsEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  setDrawer(side) {
    this.props.setDrawerSide(side, this.props.ActivePage);
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
    const isLeftDrawer = this.props.drawer && this.props.drawer.left && this.props.drawer.left.screen === this.props.ActivePage;
    const isRightDrawer = this.props.drawer && this.props.drawer.right && this.props.drawer.right.screen === this.props.ActivePage;

    return (
      <div className="ComponentEditor-Root">
        <h3>Page Settings</h3>

        <h4>
          Drawer Settings <i className="fa fa-info-circle fa-lg" onClick={this.handleTouchTap.bind(this)} />
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

        <Toggle
          label="Use as left drawer"
          onToggle={_.bind(this.setDrawer, this, 'left')}
          defaultToggled={isLeftDrawer}
        />

        <Toggle
          label="Use as right drawer"
          onToggle={_.bind(this.setDrawer, this, 'right')}
          defaultToggled={isRightDrawer}
        />

        {(isRightDrawer || isLeftDrawer) && (
          <SelectField
            floatingLabelText="Drawer Animation"
            value={this.props.drawer && this.props.drawer.animationType}
            floatingLabelFixed
            onChange={(ev, index, animation) => this.props.setDrawerAnimation(animation)}
          >
            {_.map(drawerSchema.properties.animationType.enum, animation => (
              <MenuItem value={animation} primaryText={animation} key={animation} />
            ))}
          </SelectField>
        )}

        <ComponentDrawer />
      </div>
    );
  }
}

PageSettingsEditor.defaultProps = {
  ActivePage: null,
  drawer: null
};

PageSettingsEditor.propTypes = {
  ActivePage: React.PropTypes.string,
  drawer: React.PropTypes.object,
  setDrawerSide: React.PropTypes.func.isRequired,
  setDrawerAnimation: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ActivePage: state.ActivePage,
  drawer: state.Mock.drawer
});

const mapDispatchToProps = ({
  setDrawerSide,
  setDrawerAnimation
});

const PageSettingsEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageSettingsEditor);

export default PageSettingsEditorContainer;
