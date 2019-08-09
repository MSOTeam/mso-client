import React, { Component } from 'react';
import { connect } from 'react-redux';
import Splash from './../landing/Landing';

const Landing = () => {
  return (
    <Splash />
  );
};

function mapStateToProps(state) {
  return {
    isOpen: state.navigation.isOpen,
  };
}

export default connect(mapStateToProps)(Landing);

