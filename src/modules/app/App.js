import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from '../navigation/index';
import { go } from 'react-router-redux/actions';
import { color } from '../../styles/color';

const NavWrapper = styled.div`
  background: ${color.light};
  position: sticky;
  top: 0px;
`;

const Signupfixed = styled.div`
  background: ${color.primary};
  color: ${color.light};
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  text-align: center;
  font-weight: 700;
  font-size: 20px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 4px;
  cursor: pointer;
`;

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <NavWrapper>
          <Navigation />
        </NavWrapper>
        {children}
        <Signupfixed>SIGN UP NOW!</Signupfixed>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
