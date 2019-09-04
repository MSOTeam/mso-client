import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Articles from '../articles/Articles';
import { color } from '../../styles/color';
import Search from '../../assets/search.svg';
import { GridLayout, MasonaryLayout, Sort } from '../../assets/icon';

const Header = styled.div`
  padding: 0px 70px 0 140px;
  transition: all 0.3s;

  ${props => props.sidebarStatus === true && css`
      padding: 0px 70px 0  315px;
  `}
`;

const Welcome = styled.h1`
  font-size: 1.9em;
  font-weight: 700;
  letter-spacing: 1px;
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
    /* content: url(${Search}); */
    background-image: url(${Search});
    background-position: 7px 14px;
    background-repeat: no-repeat;
    /* background: #FAFAFA; */
    width: 100%;
    height: 60px;
    margin: 0px 0 35px;
    font-style: italic;
    box-shadow: none;
    border: #eaeaea 1px solid;
    border-left: none;
    border-top: none;
    border-right: none;
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Welcome>Welcome back {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</Welcome>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '45px' }}>
            {/* <div style={{ cursor: 'pointer'}}>
              <GridLayout style={{ marginRight: '10px' }} />
            </div>
            <div> */}
            {/* <ListLayout style={{ marginRight: '10px' }} /> */}
            {/* </div> */}
          </div>
        </div>
        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <Cats active>Latest</Cats>
            <Cats>Recommended</Cats>
            <Cats>Trending</Cats>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <FilterBox placeholder="Search" />
        </div>*/}
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
