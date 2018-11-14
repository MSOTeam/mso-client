import React from 'react';
import { PropTypes } from 'prop-types';
import { Editor as DraftEditor, EditorState } from 'draft-js';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onChange = editorState => this.setState({ editorState });
  }
  render() {
    return (
      <DraftEditor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

Editor.defaultProps = {
  text: '',
};

Editor.propTypes = {
  text: PropTypes.string,
};

export default Editor;
