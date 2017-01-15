import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import './Page.css';
import { setActivePage } from '../../Actions';

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
    this.props.onSetActivePage(this.props.page.name);
  }

  render() {
    const extraStyles = {
      background: 'white'
    };

    if (this.props.page.name === this.props.ActivePage) {
      _.extend(extraStyles, {
        background: 'red',
        color: 'white'
      });
    }

    return (
      <Paper style={_.extend({}, PaperStyle, extraStyles)} zDepth={2} onClick={this.onClick.bind(this)}>
        <div className="Page-root">
          {this.props.page.name}
        </div>
      </Paper>
    );
  }
}

Page.defaultProps = {
  ActivePage: '',
};

Page.propTypes = {
  page: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired
  }).isRequired,
  onSetActivePage: React.PropTypes.func.isRequired,
  ActivePage: React.PropTypes.string
};

const mapStateToProps = (state, props) => ({
  ActivePage: state.ActivePage,
  page: state.Mock.pages[props.index]
});

const mapDispatchToProps = ({
  onSetActivePage: setActivePage
});

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default PageContainer;
