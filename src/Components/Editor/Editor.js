import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import schemaJSON from './../../Schema/combined.json';
import './Editor.css';

const PaperStyle = {
  height: 667,
  width: 375,
  flexBasis: 100,
  textAlign: 'center',
  margin: 'auto',
  marginBottom: 10
};

class Editor extends React.Component {
  componentWillMount() {
    // var editor = JSONEditor(this.editor, {
    //   schema: schemaJSON
    // });
  }

  render() {
    console.log(this.props.currentPage)
    return (
      <div className="Editor-root">
        <div className="Editor-container">
          <h1>{this.props.ActivePage}</h1>
          {this.props.currentPage ? (
            <Paper style={PaperStyle} />
          ) : (
            <h2>Add a page to start creating your app!</h2>
          )}
        </div>
      </div>
    );
  }
}

Editor.defaultProps = {
  ActivePage: '',
  currentPage: null
};

Editor.propTypes = {
  ActivePage: React.PropTypes.string,
  currentPage: React.PropTypes.object
};

const mapStateToProps = (state) => {
  const currentPage = state.Mock.pages.find(page => page.name === state.ActivePage);

  return {
    ActivePage: state.ActivePage,
    currentPage
  };
};

const mapDispatchToProps = ({

});

const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);

export default EditorContainer;
