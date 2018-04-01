import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import Input from '../../components/Input';

class LoginEmail extends Component {

  onRegister = (event) => {
    const { dispatch } = this.props;
    event.preventDefault();
    // dispatch(actions.login('client', this.state));
  };

  handleInputChange = (event) => {
    const target = event.target;
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

LoginEmail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginEmail);
