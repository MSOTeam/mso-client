import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

const Navigation = () => {
  return (
    <div>fda</div>
  );
};

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isOpen: state.navigation.isOpen,
  };
}

export default connect(mapStateToProps)(Navigation);
