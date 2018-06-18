import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import Input from '../../components/Input';

class ShopperInfo extends Component {

  onRegister = (event) => {
    const { dispatch } = this.props;
    event.preventDefault();
    // dispatch(actions.register('client', this.state));
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
        <Input name="fullname" label="Full name:" onChange={this.handleInputChange} />
        <Input name="experience" label="Experience:" onChange={this.handleInputChange} />
        <Input name="style" label="Style:" onChange={this.handleInputChange} />

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

ShopperInfo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ShopperInfo);
