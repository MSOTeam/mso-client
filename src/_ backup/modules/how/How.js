import React, { Component } from 'react';
import styled from 'styled-components';
import SearchImg from '../../assets/img/search_img.jpg';
import Clock from '../../assets/img/clock.svg';
import SearchSVG from '../../assets/img/search.svg';
import Go from '../../assets/img/go.svg';
import { color } from '../../styles/color';
import { go } from 'react-router-redux/actions';

const Headline = styled.h1`
  font-size: 25px !important;
  text-align: center;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 50px;
`;

const Actions = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
`;

const How = () => {
  return (
    <div style={{ background: color.light, width: '80vw', margin: 'auto' }}>
      <Headline>How does it work?</Headline>
      <Actions>
        <div style={{ display: 'grid' }}>
          <img style={{ margin: 'auto' }} src={SearchSVG} />
        </div>
        <div style={{ display: 'grid' }}>
          <img style={{ margin: 'auto' }} src={Clock} />
        </div>
        <div style={{ display: 'grid' }}>
          <img style={{ margin: 'auto' }} src={Go} />
        </div>
      </Actions>
    </div>
  );
};

export default How;
