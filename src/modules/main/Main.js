import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Articles from '../articles/Articles';
import { color } from '../../styles/color';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ArticlesWrapper = styled.div`
  padding: 3% 70px 5% 140px;
  transition: padding 0.3s;

  ${props => props.sidebarStatus === true && css`
      padding: 3% 70px 5% 315px;
  `}
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
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

const FilterBox = styled.div`
  display: flex;
  width: 5%;
  justify-content: flex-end;
  align-self: end;
  /* justify-content: space-between; */
  /* border-bottom: 5px solid #eaeaea;
  padding-bottom: 15px;
  margin-bottom: 20px; */
  /* margin-right: 20px; */
`;


class Main extends Component {
  render() {
    return (
      <div>
        <Welcome>Welcome back {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</Welcome>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
          <Cats active>Latest</Cats>
          <Cats>Recommended</Cats>
          <Cats>Trending</Cats>
        </div>
          <FilterBox>
          {/* <Filter placeholder="Filter..." /> */}
          {/* <img src={Search} alt="" /> */}
        </FilterBox>
          {/* <LoadingLogo /> */}
        </div>
        <Articles />
      </div>
    );
  }
}

export default Main;
