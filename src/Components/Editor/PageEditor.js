import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Component from './Component';

const PaperStyle = {
  height: 667,
  width: 375,
  flexBasis: 100,
  textAlign: 'center',
  margin: 'auto',
  marginBottom: 10,
  padding: 20,
  overflow: 'hidden'
};

class PageEditor extends React.Component {
  render() {
    return (
      <Paper style={PaperStyle}>
        {this.props.components.length ? (
          _.map(this.props.components, (component, index) => (
            <Component key={index} page={this.props.ActivePage} component={component} index={index} />
          ))
        ) : (
          <h3>No components...</h3>
        )}
      </Paper>
    );
  }
}

PageEditor.defaultProps = {
  components: []
};

PageEditor.propTypes = {
  ActivePage: React.PropTypes.string.isRequired,
  components: React.PropTypes.array
};

const mapStateToProps = (state) => {
  const currentPage = state.Mock.pages.find(page => page.name === state.ActivePage);

  return {
    components: currentPage.components,
    ActivePage: state.ActivePage
  };
};

const mapDispatchToProps = ({

});

const PageEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEditor);

export default PageEditorContainer;
