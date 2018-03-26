import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { color } from '../../styles/color';
import Logo from '../../assets/img/logo.svg';
import IconSVG from '../../assets/img/icon.svg';

const twist = keyframes`
  0% {
    transform: rotate(30deg);
  }
  40% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Logowrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  margin-right: 10px;
  animation: 0.5s ${twist} ease;
`;

const Navgrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 240px 240px 100px 150px;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
  width: 95vw;
  margin: auto;
  height: 100px;
`;

const Box = styled.p`
  text-align: right;
  cursor: pointer;
`;

const Item = styled.span`
  padding: 15px;
  box-sizing: border-box;
  ${props =>
    props.signup &&
    css`
      background: ${color.primary};
      color: ${color.light};
      font-weight: bold;
    `};
`;

const Navigation = ({ children, dispatch }) => (
  <Navgrid>
    <Logowrapper onClick={() => dispatch(push('/'))}>
      <Icon src={IconSVG} />
      <img src={Logo} />
    </Logowrapper>
    <Box onClick={() => dispatch(push('/search'))}>Find a Personal Shopper</Box>
    <Box onClick={() => dispatch(push('/register-shopper'))}>Become a Personal Shopper</Box>
    <Box onClick={() => dispatch(push('/login'))}>Log in</Box>
    <Box onClick={() => dispatch(push('/register'))}>
      <Item signup>SIGN UP</Item>
    </Box>
  </Navgrid>
);

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Navigation);
