import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import RegisterShopper from '../../register/RegisterShopper';
import Login from '../../login/Login';

const Overlay = (props) => {
  return ( 
    <div>     
      {props.type === 'signup' ? (
        <RegisterShopper />
      ) : (
        <Login />
      )}
    </div> 
  );
};

export default Overlay;
