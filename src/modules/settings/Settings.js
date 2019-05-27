import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { color } from '../../styles/color';

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  padding: 20px 70px 0 140px;
  transition: all 0.3s;

  ${props => props.sidebarStatus === true && css`
      padding: 20px 70px 0  315px;
  `}

  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
  @media (max-width: 2600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Header = styled.h1`
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

const Settings = ({ sidebarStatus }) => {
  return (
    <ArticlesGrid sidebarStatus={sidebarStatus.isOpen}>
      <Header>Settings</Header>
      <div style={{ gridArea: '2 / 1 / 2 / 4' }}>
        <Cats active>Profile</Cats>
        <Cats>Account</Cats>
        <Cats>Membership</Cats>
        <Cats>Security</Cats>
      </div>
    </ArticlesGrid>
  );
};

Settings.defaultProps = {
  sidebarStatus: false,
};

Settings.propTypes = {
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

export default connect(mapStateToProps)(Settings);
