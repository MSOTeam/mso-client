import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';

class RegisterEmail extends Component {
  onRegister = (event) => {
    event.preventDefault();
    this.props.onRegister(this.state);
  };

  handleInputChange = (event) => {
    const { target } = event;
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    return (
      <form
        onSubmit={this.onRegister}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Input name="email" label="Email:" onChange={this.handleInputChange} />
        <Input name="password" label="Password:" type="password" onChange={this.handleInputChange} />

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

RegisterEmail.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterEmail;
