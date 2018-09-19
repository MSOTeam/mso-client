import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';

class LoginEmail extends Component {

  onLogin = (event) => {
    event.preventDefault();
    const { handleLogin } = this.props;
    handleLogin(this.state);
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
        onSubmit={this.onLogin}
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

LoginEmail.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginEmail;
