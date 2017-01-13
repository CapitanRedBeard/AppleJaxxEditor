import React from 'react';
import Form from 'react-jsonschema-form';

import './Editor.css';
import combinedSchema from '../../Schema/theme.json';

const uiSchema = {
  badgeBg: {
    'ui:widget': 'color',
  },
};

const log = (type) => console.log.bind(console, type);

class Editor extends React.Component {
  // <Form schema={combinedSchema}
  //       onChange={log("changed")}
  //       onSubmit={log("submitted")}
  //       onError={log("errors")} />
  render() {
    return (
      <div className="Editor-root">
        <div className="Editor-container">
          <h1>Editor</h1>
          <Form
            schema={combinedSchema}
            uiSchema={uiSchema}
            onChange={log('changed')}
            onSubmit={log('submitted')}
            onError={log('errors')}
          />
        </div>
      </div>
    );
  }
}

export default Editor;