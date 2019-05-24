import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Articles from '../articles/Articles';
import { color } from '../../styles/color';

const Header = styled.div`
  padding: 50px 70px 0 140px;
  transition: all 0.3s;

  ${props => props.sidebarStatus === true && css`
      padding: 50px 70px 0  315px;
  `}
`;

const Welcome = styled.h1`
  font-size: 1.4em;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 20px 0 30px 0;
`;

const Cats = styled.p`
  font-size: 1em;
  letter-spacing: 0.5px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  margin-right: 20px;
  ${props => props.active && css`
    font-weight: 600;
    border-bottom: 5px solid ${color.primary};
    width: fit-content;
  `}
`;


const FilterBox = styled.div`
  display: flex;
  width: 5%;
  justify-content: flex-end;
  align-self: end;
  /* justify-content: space-between; */
  /* border-bottom: 5px solid #eaeaea;
  padding-bottom: 15px;
  margin-bottom: 20px; */
  /* margin-right: 20px; */
`;

const Main = ({ authenticated, sidebarStatus }) => {
  if (!authenticated) {
    return <div />;
  }
  return (
    <div>
      <Header sidebarStatus={sidebarStatus.isOpen}>
        <Welcome>Welcome back {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</Welcome>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <Cats active>Latest</Cats>
            <Cats>Recommended</Cats>
            <Cats>Trending</Cats>
          </div>
        </div>
      </Header>
      <Articles />
    </div>
  );
};

Main.defaultProps = {
  authenticated: false,
  sidebarStatus: false,
};

Main.propTypes = {
  authenticated: PropTypes.bool,
  sidebarStatus: PropTypes.shape({
    open: PropTypes.bool,
  }),
};

function mapStateToProps(state) {
  const authenticated = (state.login.token);
  return {
    authenticated,
    sidebarStatus: state.sidebar,
  };
}

export default connect(mapStateToProps)(Main);
