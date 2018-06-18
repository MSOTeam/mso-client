import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import Input from '../../components/Input';

class ShopperProfile extends Component {
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
        <Input name="first_name" label="First name:" onChange={this.handleInputChange} />
        <Input name="last_name" label="Last name:" onChange={this.handleInputChange} />
        {/* locations [] */}
        {/* languages: {type: []}, */}
        <Input name="years_experience" label="Years experience:" onChange={this.handleInputChange} />
        <Input name="about" label="About:" onChange={this.handleInputChange} />        
        {/* hashtags: {type: []}, */}
        {/* styles: {type: []}, */}
        {/* training: {type: []}, */}
        {/* assists_with: {type: []}, */}
        {/* store_types: {type: []}, */}
        <Input name="hourly_price" label="Hourly price:" onChange={this.handleInputChange} />
        {/* availability: {type: []},       */}
        <Input name="hourly_price" label="Hourly price:" onChange={this.handleInputChange} />
        <Input name="instagram" label="Instagram:" onChange={this.handleInputChange} />
        <Input name="pinterest" label="Pinterest:" onChange={this.handleInputChange} />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

ShopperProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ShopperProfile);
