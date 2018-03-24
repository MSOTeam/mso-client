import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import Input from '../../components/Input';

class Register extends Component {
  onRegister = (event) => {
  };

  handleInputChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onRegister}>
        <Input name="name" label="Name:" onChange={this.handleInputChange} />
        <Input name="description" label="Description:" onChange={this.handleInputChange} />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Register);
