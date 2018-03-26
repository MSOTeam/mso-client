import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';

class Register extends Component {
  onRegister = (event) => {
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(actions.registerShopper(this.state));
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
        <div>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:
            <input
              type="text"
              name="description"
              onChange={this.handleInputChange}
            />
          </label>
        </div>
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
