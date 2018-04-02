import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from '../navigation/Navigation';
import { go } from 'react-router-redux/actions';
import { color } from '../../styles/color';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

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
  font-weight: 500;
  font-size: 16px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  cursor: pointer;
  box-shadow: #00000085 -28px 50px 33px 43px;
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
