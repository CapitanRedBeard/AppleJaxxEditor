import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'

import { addPage } from '../../Actions'

import './Pages.css';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Pages extends React.Component {
  render() {
    return (
      <div className="Pages-root">
        <h3>Pages</h3>

        <div className="Pages-list">
          {this.props.pages.map(page => (
            <Paper style={style} zDepth={2} />
          ))}
        </div>

        <RaisedButton label="Add Page" onClick={this.props.onAddPage}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    pages: state.pages
  }
}

const mapDispatchToProps = ({
  onAddPage: addPage
})

const PagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages)

export default PagesContainer;
