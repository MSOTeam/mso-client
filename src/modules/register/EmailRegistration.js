import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';

class EmailRegistration extends Component {
  onRegister = (event) => {
    const { handleRegister } = this.props;
    event.preventDefault();
    handleRegister(this.state);
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

EmailRegistration.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};

export default EmailRegistration;
