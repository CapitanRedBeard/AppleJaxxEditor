import React from 'react';
import { SchemaForm } from 'react-schema-form';
import { connect } from 'react-redux'

import schemaJSON from './../../Schema/combined.json';
import './Editor.css';

class Editor extends React.Component {
  render() {
    return (
      <div className="Editor-root">
        <div className="Editor-container">
          <h1>Editor: {this.props.ActivePage}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const currentPage = state.Mock.pages.find(page => page.name === state.ActivePage);

  return {
    ActivePage: state.ActivePage,
    currentPage
  }
}

const mapDispatchToProps = ({

})

const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)

export default EditorContainer;
