import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'

import { addPage } from '../../Actions'
import Page from './../Page/Page';

import './Pages.css';

class Pages extends React.Component {
  render() {
    return (
      <div className="Pages-root">
        <h3>Pages</h3>

        <div className="Pages-list">
          {this.props.pages.map(page => 
            <Page {...page} key={page.name} />
          )}
        </div>

        <div className="Pages-Button-Container">
          <RaisedButton className="Pages-Add-Page" label="Add Page" onClick={this.props.onAddPage}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.Mock.pages
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
