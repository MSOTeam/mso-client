import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { color } from '../../styles/color';
import { logout } from '../login/actions';
import { Logo, FavCheckedSmall, InProgressCheckedSmall, ReminderCheckedSmall, LogOut, ArchiveCheckedSmall, Unsorted } from '../../assets/icon';

const ArticlesGrid = styled.div`
  padding: 20px 70px 0 140px;
  transition: all 0.3s;
  height: calc(100% - 100px);
  
  ${props => props.sidebarStatus === true && css`
      padding: 20px 70px 0  315px;
  `}

  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
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

const Settings = ({ sidebarStatus, dispatch, props }) => {
  return (
    <ArticlesGrid sidebarStatus={sidebarStatus.isOpen}>
      <Header>Settings</Header>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Cats active>Profile</Cats>
          <Cats>Account</Cats>
          <Cats>Membership</Cats>
          <Cats>Security</Cats>
        </div>
        <div onClick={() => dispatch(logout())} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', width: '83px',  justifyContent: 'space-between', marginBottom: '34px'}}><p style={{color: '#5649CF', position: 'relative', bottom: '1px'}}>Log out</p></div>
        {/* background: '#FAFAFA', padding: '10px 6px'*/}
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
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const authenticated = (state.login.token);
  return {
    authenticated,
    sidebarStatus: state.sidebar,
  };
}

export default connect(mapStateToProps)(Settings);
