import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.getElementById('modal-root').appendChild(this.el);
  }

  componentWillUnmount() {
    document.getElementById('modal-root').removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default Modal;
