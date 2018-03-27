import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Register from '../../account/Register';
import Login from '../../account/Login';

const Overlay = (props) => {
  if(props.type === '') {
    return null;
  }
  return ( 
    <div>     
      {props.type === 'signup' ? (
        <Register />
      ) : (
        <Login />
      )}
    </div> 
  );
};

export default Overlay;
