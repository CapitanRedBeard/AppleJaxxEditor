import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { addComponent } from '../../Actions';

const PaperStyle = {
  height: 667,
  width: 375,
  flexBasis: 100,
  textAlign: 'center',
  margin: 'auto',
  marginBottom: 10,
  padding: 20
};

class PageEditor extends React.Component {
  render() {
    return (
      <Paper style={PaperStyle}>
        {this.props.components.length ? (
          _.map(this.props.components, (component, index) => (
            <div key={index}>component</div>
          ))
        ) : (
          <h3>Add some components to the page to get started!</h3>
        )}

        <RaisedButton
          label="Add Component"
          onClick={() => {
            this.props.onAddComponent(
              this.props.ActivePage,
              {
                type: 'text',
                style: {
                  fontSize: 20,
                  color: '#254E70'
                },
                text: 'Attributes'
              });
          }}
        />
      </Paper>
    );
  }
}

PageEditor.defaultProps = {
  components: []
};

PageEditor.propTypes = {
  ActivePage: React.PropTypes.string,
  components: React.PropTypes.array,
  onAddComponent: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const currentPage = state.Mock.pages.find(page => page.name === state.ActivePage);

  return {
    components: currentPage.components,
    ActivePage: state.ActivePage
  };
};

const mapDispatchToProps = ({
  onAddComponent: addComponent
});

const PageEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEditor);

export default PageEditorContainer;
