import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { color } from '../../styles/color';
import Logo from '../../assets/logo_p_text_small.svg';
import Star from '../../assets/star.svg';
import Reminder from '../../assets/reminder.svg';
import Progress from '../../assets/progress.svg';
import SignOut from '../../assets/signout.svg';
import { logout } from '../login/actions';

const Navgrid = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 0 70px 0 140px;
  /* background: ${color.secondary}; */
  @media (max-width: 850px) {
    padding: 0 20px 0 80px;

  }
`;

const Navitem = styled.div`
  cursor: pointer;
  align-self: center;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding-left: 50px;
  ${props => props.logo && css`
    padding-left: 0;
  `}
  ${props => props.star && css`
    &::before {
      content: url(${Star});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  ${props => props.progress && css`
    &::before {
      content: url(${Progress});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  ${props => props.reminder && css`
    &::before {
      content: url(${Reminder});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  ${props => props.logout && css`
    &::before {
      content: url(${SignOut});
      margin-right: 10px;
      position: relative;
      top: 2px;
    }
  `}
  @media (max-width: 850px) {
    font-size: 2px;
    color: white;
    padding-left: 20px;
  }
`;

const AuthNavigation = ({ dispatch }) => (
  <Navgrid>
    <Navitem logo onClick={() => dispatch(push('/'))}>
      <img src={Logo} alt="logo" />
    </Navitem>
    <div style={{ display: 'flex' }}>
      <Navitem star onClick={() => dispatch(push('/articles/favorites'))}>Favourites</Navitem>
      <Navitem progress onClick={() => dispatch(push('/articles/inprogress'))}>In progress</Navitem>
      <Navitem reminder onClick={() => dispatch(push('/articles/reminder'))}>Reminder</Navitem>
      <Navitem reminder onClick={() => dispatch(push('/articles/reminder'))}>Unsorted</Navitem>
      <Navitem reminder onClick={() => dispatch(push('/articles/reminder'))}>Archive</Navitem>
      <Navitem logout onClick={() => dispatch(logout())}>Logout</Navitem>
    </div>
  </Navgrid>
);


AuthNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(AuthNavigation);

