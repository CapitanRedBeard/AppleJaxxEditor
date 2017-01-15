import React from 'react';
import Paper from 'material-ui/Paper';

import './Page.css';

const PaperStyle = {
  height: 100,
  width: 100,
  flexBasis: 100,
  textAlign: 'center',
  margin: 'auto',
  marginBottom: 10
};

class Page extends React.Component {
  render() {
    return (
      <Paper style={PaperStyle} zDepth={2}>
        {this.props.name}
      </Paper>
    );
  }
}

export default Page;
