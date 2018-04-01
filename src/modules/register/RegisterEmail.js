import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import Input from '../../components/Input';

class RegisterEmail extends Component {

  onRegister = (event) => {
    const { dispatch } = this.props;
    event.preventDefault();
    // dispatch(actions.registerShopper(this.state));
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
        <Input name="first_name" label="First name:" onChange={this.handleInputChange} />
        <Input name="last_name" label="Last name:" onChange={this.handleInputChange} />
        <Input name="email" label="Email:" onChange={this.handleInputChange} />

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

RegisterEmail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(RegisterEmail);
