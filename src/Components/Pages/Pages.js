import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import { addPage } from '../../Actions';
import Page from './../Page/Page';

import './Pages.css';

const Pages = props => (
  <div className="Pages-root">
    <h3>Pages</h3>

    <div className="Pages-list">
      {props.pages.map(page =>
        <Page {...page} key={page.name} />
      )}
    </div>

    <div className="Pages-Button-Container">
      <RaisedButton className="Pages-Add-Page" label="Add Page" onClick={props.onAddPage} />
    </div>
  </div>
);

Pages.propTypes = {
  pages: React.PropTypes.array.isRequired,
  onAddPage: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  pages: state.Mock.pages
});

const mapDispatchToProps = ({
  onAddPage: addPage
});

const PagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);

export default PagesContainer;
