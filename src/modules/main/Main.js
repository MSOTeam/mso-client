import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Articles from '../articles/Articles';
import { color } from '../../styles/color';
import Search from '../../assets/search.svg';

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


const FilterBox = styled.input`
    content: url(${Search});
    background-image: url(${Search});
    background-position: 7px 7px;
    background-repeat: no-repeat;
    background: #FAFAFA;
    width: 100%;
    height: 60px;
    margin: 14px 0;
    font-style: italic;
    box-shadow: none;
    border: #eaeaea 1px solid;
    outline: none;
    box-sizing: border-box;
    padding-left: 50px;
    font-size: 1.3em;
    font-weight: 300;
    letter-spacing: 1px;
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
        <div style={{ position: 'relative' }}>
          <img src={Search} style={{ position: 'absolute', top: '29px', left: '13px' }} />
          <FilterBox placeholder="Search" />
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
