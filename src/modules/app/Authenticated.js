import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthNavigation from '../navigation/AuthNavigation';
import { color } from '../../styles/color';

const NavWrapper = styled.div`
  background: ${color.light};
  position: sticky;
  top: 0px;
`;

const Authenticated = ({ children }) => (
  <div>
    <NavWrapper>
      <AuthNavigation />
    </NavWrapper>
    { children }
  </div>
);

Authenticated.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Authenticated;
