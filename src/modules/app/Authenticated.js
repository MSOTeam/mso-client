import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthNavigation from '../navigation/AuthNavigation';
import Sidebar from '../sidebar/sidebar';
import { color } from '../../styles/color';

const NavWrapper = styled.div`
  background: ${color.light};
  position: sticky;
  top: 0px;
  z-index: 10;
`;

const Authenticated = ({ children }) => (
  <div>
    <NavWrapper>
      <AuthNavigation />
      <Sidebar /> 
    </NavWrapper>
    { children }
  </div>
);

Authenticated.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Authenticated;
