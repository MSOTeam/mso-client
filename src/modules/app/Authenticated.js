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

const Authenticated = ({ children, sidebarStatus }) => (
  <div>
    <NavWrapper>
      <AuthNavigation />
      <Sidebar />
    </NavWrapper>
    <ArticlesWrapper sidebarStatus={sidebarStatus.isOpen}>
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
