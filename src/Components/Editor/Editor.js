import React from 'react';
import { SchemaForm } from 'react-schema-form';
import combinedSchema from './../../Schema/schema.json';

import './Editor.css';

const uiSchema = {
  badgeBg: {
    'ui:widget': 'color',
  },
};

const log = (type) => console.log.bind(console, type);

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schema: combinedSchema,
      form: [],
      model: {}
    };
  }

  render() {
    return (
      <div className="Editor-root">
        <div className="Editor-container">
          <h1>Editor</h1>
            <SchemaForm
              schema={this.state.schema}
              form={this.state.form}
              model={this.props.model}
              onModelChange={this.props.onModelChange}
            />
        </div>
      </div>
    );
  }
}

export default Editor;