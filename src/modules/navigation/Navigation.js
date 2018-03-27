import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Flex, Box } from 'grid-styled'
import { color } from '../../styles/color';
import Logo from '../../assets/img/logo_big.svg';
import IconSVG from '../../assets/img/icon.svg';
import Crooked from '../../assets/img/crooked.svg';

<Box
  width={[
    1/10,
    2/10,
    3/10,
    4/10,
    5/10,
    6/10,
    7/10,
    8/10,
    9/10,
    10/10
  ]}
/>

const Navgrid = styled(Flex)`
  height: 100px;
  border-bottom: 1px solid ${color.lightgrey} 
  justify-content: space-between;
  margin: 0 2.5vw;
`;

const Navitem = styled(Box)`
  cursor: pointer;
  align-self: center;
`;

const Navigation = ({ children, dispatch }) => (
  <Navgrid>
      <Navitem width={[  1, 10/10, 3/10, 5/10, 6/10, 8/10 ]} onClick={() => dispatch(push('/'))}><img src={Logo} /></Navitem>
      <Navitem onClick={() => dispatch(push('/search'))}>Find a Personal Shopper</Navitem>
      <Navitem>Become a Personal Shopper</Navitem>
      <Navitem onClick={() => dispatch(push('/register'))}>Sign up</Navitem>
      <Navitem onClick={() => dispatch(push('/login'))}>Log in</Navitem>
  </Navgrid>
);

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Navigation);
