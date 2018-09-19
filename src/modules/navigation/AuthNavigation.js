import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Flex, Box } from 'grid-styled';
import Modal from 'react-modal';
import Overlay from './component/Overlay';
import { color } from '../../styles/color';
import Logo from '../../assets/img/logo_big.svg';
import * as actions from './actions';
import { logout } from '../login/actions';

  <Box
  width={[
    1 / 10,
    2 / 10,
    3 / 10,
    4 / 10,
    5 / 10,
    6 / 10,
    7 / 10,
    8 / 10,
    9 / 10,
    10 / 10
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
  font-weight: 100;
  font-size: 14px;
`;

const AuthNavigation = ({ dispatch }) => (
  <Navgrid>
    <Navitem width={[ 1, 10 / 10, 3 / 10, 5 / 10, 6 / 10, 8 / 10]} onClick={() => dispatch(push('/'))}>TagIt</Navitem>
    <Navitem onClick={() => dispatch(push('/articles'))}>Articles</Navitem>
    <Navitem onClick={() => dispatch(logout())}>Logout</Navitem>
  </Navgrid>
);


AuthNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(AuthNavigation);

