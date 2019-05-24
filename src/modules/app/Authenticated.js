import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import AuthNavigation from '../navigation/AuthNavigation';
import Sidebar from '../sidebar/sidebar';
import { color } from '../../styles/color';

const NavWrapper = styled.div`
  background: ${color.light};
  /* position: sticky;
  top: 0px;
  z-index: 10; */
`;

const ArticlesWrapper = styled.div`
  transition: padding 0.3s;
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`;

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

const Authenticated = ({ children, sidebarStatus }) => (
  <div>
    <NavWrapper>
      <AuthNavigation />
      <Sidebar />
    </NavWrapper>
    <ArticlesWrapper sidebarStatus={sidebarStatus.isOpen}>
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
      { children }
    </ArticlesWrapper>
  </div>
);

Authenticated.defaultProps = {
  sidebarStatus: false,
};

Authenticated.propTypes = {
  children: PropTypes.object.isRequired,
  sidebarStatus: PropTypes.shape({
    open: PropTypes.bool,
  }),
};

function mapStateToProps(state) {
  return {
    sidebarStatus: state.sidebar,
  };
}

export default connect(mapStateToProps)(Authenticated);
