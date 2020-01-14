import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { color } from '../../styles/color';
import { Logo, FavCheckedSmall, InProgressCheckedSmall, ReminderCheckedSmall, LogOut, ArchiveCheckedSmall, Unsorted } from '../../assets/icon';

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
  display: flex;
  align-self: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding-left: 60px;
  ${props => props.logo && css`
    padding-left: 0;
  `}
  @media (max-width: 850px) {
    font-size: 2px;
    color: white;
    padding-left: 20px;
  }
`;

const NavName = styled.span`
  padding-left: 10px;
`;

const Flex = styled.div`
  display: flex;
`;


const AuthNavigation = ({ dispatch, props }) => console.log(props) || (
  <Navgrid>
    <Navitem logo onClick={() => dispatch(push('/'))}>
      <Logo />
    </Navitem>
    <Flex>
      <Navitem star onClick={() => dispatch(push('/articles/favorites'))}><FavCheckedSmall/><NavName>Favorites</NavName></Navitem>
      <Navitem progress onClick={() => dispatch(push('/articles/inprogress'))}><InProgressCheckedSmall/><NavName>In progress</NavName></Navitem>
      <Navitem reminder onClick={() => dispatch(push('/articles/reminder'))}><ReminderCheckedSmall/><NavName>Reminder</NavName></Navitem>
      <Navitem reminder onClick={() => dispatch(push('/articles/unsorted'))}><Unsorted/><NavName>Unsorted</NavName></Navitem>
      <Navitem reminder onClick={() => dispatch(push('/articles/archive'))}><ArchiveCheckedSmall/><NavName>Archive</NavName></Navitem>
      {/* <Navitem logout onClick={() => dispatch(logout())}><LogOut /></Navitem> */}
    </Flex>
  </Navgrid>
);


AuthNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(AuthNavigation);

