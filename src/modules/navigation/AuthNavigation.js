import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { Logo, Fav, Archive } from '../../assets/icon';

const Navgrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 27px 0 20px 0;
  padding: 0 30px 0 75px;
  @media (max-width: 850px) {
    padding: 0 30px 0 75px;
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
  padding-left: 20px;
  ${props => props.logo && css`
    padding-left: 0;
  `}
  @media (max-width: 850px) {
    font-size: 2px;
    color: white;
    padding-left: 20px;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const AuthNavigation = ({ dispatch }) => {
  return (
    <Navgrid>
      <Navitem logo onClick={() => dispatch(push('/'))}>
        <Logo />
      </Navitem>

      <Flex>
        <Navitem star onClick={() => dispatch(push('/articles/favorites'))}>+</Navitem>
        {/* <Navitem star onClick={() => dispatch(push('/articles/favorites'))}><Fav/></Navitem>
        <Navitem reminder onClick={() => dispatch(push('/articles/reminder'))}><InProgress/></Navitem>
        <Navitem reminder onClick={() => dispatch(push('/articles/unsorted'))}><Unsorted/></Navitem>
        <Navitem reminder onClick={() => dispatch(push('/articles/archive'))}><Archive/></Navitem> */}
        <Navitem star onClick={() => dispatch(push('/articles/favorites'))}><Fav /></Navitem>
        {/* <Navitem progress onClick={() => dispatch(push('/articles/inprogress'))}><InProgressCheckedSmall/><NavName>In progress</NavName></Navitem> */}
        {/* <Navitem reminder onClick={() => dispatch(push('/articles/reminder'))}><ReminderCheckedSmall/><NavName>Reminder</NavName></Navitem> */}
        {/* <Navitem reminder onClick={() => dispatch(push('/articles/unsorted'))}><Unsorted/></Navitem> */}
        <Navitem reminder onClick={() => dispatch(push('/articles/archive'))}><Archive /></Navitem>
        {/* <Navitem logout onClick={() => dispatch(logout())}><LogOut /></Navitem> */}
      </Flex>
    </Navgrid>
  );
};


AuthNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(AuthNavigation);

