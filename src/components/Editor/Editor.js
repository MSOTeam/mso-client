import React from 'react';
import { PropTypes } from 'prop-types';
import Plain from 'slate-plain-serializer';
import Html from 'slate-html-serializer';
import { SlateEditor } from 'slate-react';

// const BLOCK_TAGS = {
//   blockquote: 'quote',
//   p: 'paragraph',
//   pre: 'code',
// };
//   // Add a dictionary of mark tags.
// const MARK_TAGS = {
//   em: 'italic',
//   strong: 'bold',
//   u: 'underline',
// };
// const rules = [
//   {
//     deserialize(el, next) {
//       const type = BLOCK_TAGS[el.tagName.toLowerCase()]
//       if (type) {
//         return {
//           object: 'block',
//           type: type,
//           data: {
//             className: el.getAttribute('class'),
//           },
//           nodes: next(el.childNodes),
//         }
//       }
//     },
//     serialize(obj, children) {
//       if (obj.object == 'block') {
//         switch (obj.type) {
//           case 'code':
//             return (
//                 <pre>
//                   <code>{children}</code>
//                 </pre>
//             )
//           case 'paragraph':
//             return <p className={obj.data.get('className')}>{children}</p>
//           case 'quote':
//             return <blockquote>{children}</blockquote>
//         }
//       }
//     },
//   },
//   // Add a new rule that handles marks...
//   {
//     deserialize(el, next) {
//       const type = MARK_TAGS[el.tagName.toLowerCase()]
//       if (type) {
//         return {
//           object: 'mark',
//           type: type,
//           nodes: next(el.childNodes),
//         }
//       }
//     },
//     serialize(obj, children) {
//       if (obj.object == 'mark') {
//         switch (obj.type) {
//           case 'bold':
//             return <strong>{children}</strong>
//           case 'italic':
//             return <em>{children}</em>
//           case 'underline':
//             return <u>{children}</u>
//         }
//       }
//     },
//   },
// ];

const html = new Html();

class Editor extends React.Component {
  state = {
    value: html.deserialize(this.props.value),
  }

  onChange = ({ value }) => {
    this.setState({ value });
  }

  render() {
    return (
      <SlateEditor
        placeholder="Enter some plain text..."
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

Editor.defaultProps = {
  value: '',
};

Editor.propTypes = {
  value: PropTypes.string,
};

export default Editor;
