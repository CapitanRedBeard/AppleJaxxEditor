import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { setActivePageName } from '../../Actions';

// import schemaJSON from './../../Schema/combined.json';
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
  constructor(props) {
    super(props);
    this.state = {
      editingPageName: false,
      pageName: props.ActivePage
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pageName: nextProps.ActivePage
    });
  }

  onKeyPress(ev) {
    if (ev.key === 'Enter') {
      this.props.onEditPageNameEnter(this.props.ActivePage, ev.currentTarget.value);
      this.setState({
        editingPageName: false
      });
    } else if (ev.key === 'Escape') {
      this.setState({
        pageName: this.props.ActivePage,
        editingPageName: false
      });
    }
  }

  beginEditPageName() {
    this.setState({
      editingPageName: true
    });
  }

  editPageName(ev) {
    this.setState({
      pageName: ev.currentTarget.value
    });
  }

  render() {
    return (
      <div className="Editor-root">
        <div className="Editor-container">
          {this.props.currentPage ? [
            <div key="title" className="Editor-page-name" onDoubleClick={this.beginEditPageName.bind(this)}>
              {this.state.editingPageName ? (
                <input value={this.state.pageName} onKeyDown={this.onKeyPress.bind(this)} onChange={this.editPageName.bind(this)} />
              ) : (
                <h1>{this.state.pageName}</h1>
              )}
            </div>,
            <Paper key="editor" style={PaperStyle} />
          ] : (
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
  currentPage: React.PropTypes.object,
  onEditPageNameEnter: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const currentPage = state.Mock.pages.find(page => page.name === state.ActivePage);

  return {
    ActivePage: state.ActivePage,
    currentPage
  };
};

const mapDispatchToProps = ({
  onEditPageNameEnter: setActivePageName
});

const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);

export default EditorContainer;
