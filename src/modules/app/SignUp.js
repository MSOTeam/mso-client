import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from '../navigation/Navigation';
import { color } from '../../styles/color';

const NavWrapper = styled.div`
  background: ${color.light};
  position: sticky;
  top: 0px;
`;

const Signupfixed = styled.div`
  background: ${color.primary};
  color: ${color.light};
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  text-align: center;
  font-weight: 500;
  font-size: 16px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  cursor: pointer;
  box-shadow: #00000085 -28px 50px 33px 43px;
`;

const SignUp = ({ children }) => (
  <div>
    <NavWrapper>
      <Navigation />
    </NavWrapper>
    {children}
    <Signupfixed>SIGN UP NOW!</Signupfixed>
  </div>
);

SignUp.propTypes = {
  children: PropTypes.object.isRequired,
};

export default SignUp;
