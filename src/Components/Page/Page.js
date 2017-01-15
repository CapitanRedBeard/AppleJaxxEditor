import React from 'react';
import _ from 'underscore';
import Paper from 'material-ui/Paper';
import { setActivePage } from '../../Actions';
import { connect } from 'react-redux'

import './Page.css';

const PaperStyle = {
  height: 100,
  width: 100,
  flexBasis: 100,
  textAlign: 'center',
  margin: 'auto',
  marginBottom: 10
};

class Page extends React.Component {
  onClick() {
    this.props.onSetActivePage(this.props.name);
  }

  render() {
    let extraStyles = {
      background: 'white'
    };

    if (this.props.name === this.props.ActivePage) {
      _.extend(extraStyles, {
        background: 'red'
      })
    }

    return (
      <Paper style={_.extend({}, PaperStyle, extraStyles)} zDepth={2} onClick={this.onClick.bind(this)}>
        {this.props.name}
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ActivePage: state.ActivePage
  }
}

const mapDispatchToProps = ({
  onSetActivePage: setActivePage
})

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default PageContainer;
