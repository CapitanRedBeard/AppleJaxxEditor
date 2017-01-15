import React from 'react';
// import { SchemaForm } from 'react-schema-form';
import { connect } from 'react-redux';

// import schemaJSON from './../../Schema/combined.json';
import './Editor.css';

const Editor = props => (
  <div className="Editor-root">
    <div className="Editor-container">
      <h1>Editor: {props.ActivePage}</h1>
    </div>
  </div>
);

Editor.defaultProps = {
  ActivePage: ''
};

Editor.propTypes = {
  ActivePage: React.PropTypes.string
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
