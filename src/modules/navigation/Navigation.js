import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { color } from '../../styles/color';
import Logo from '../../assets/img/logo.svg';
import IconSVG from '../../assets/img/icon.svg';
import Crooked from '../../assets/img/crooked.svg';

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
  margin-left: 2.5vw;
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
  height: 100px;
  border-bottom: 1px solid ${color.lightgrey} 
`;

const Box = styled.p`
  text-align: right;
  cursor: pointer;
  ${props =>
    props.last &&
    css`
      margin-right: 2.5vw;
  `};
  ${props => props.value == 'become' && css`
  position: relative;
  &:after {
    background:repeat-x url(${Crooked});
    content: '.';
    position: absolute;
    bottom: -22px;
    width: 73.3%;
    left: 64px;
    color: white;
    top: 26px;
    }
  }    
  `}
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
    <Box>Become a Personal Shopper</Box>
    <Box onClick={() => dispatch(push('/register'))}>Sign up</Box>
    <Box last onClick={() => dispatch(push('/login'))}>Log in</Box>
  </Navgrid>
);

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Navigation);
