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
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 50px;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
`;

const How = () => {
  return (
    <div style={{ background: color.light, width: '80vw', margin: 'auto' }}>
      <Headline>How it works</Headline>
      <Actions>
        <div style={{ display: 'grid' }}>
            <div style={{display: 'flex', height: '200px', margin: 'auto'}}>
              <img style={{ margin: 'auto' }} src={SearchSVG} />
            </div>
            <p style={{ textAlign: 'center', fontSize: '18px !important', fontWeight: '700', marginBottom:'15px'}}>FIND A PERSONAL SHOPPER</p>
            <p style={{ textAlign: 'center', lineHeight:'25px', width: '296px', margin: 'auto'}}>Personal Shoppers list their services and all you need to do is search for the right person to assist you on following dates.</p>        
        </div>
        <div style={{ display: 'grid' }}>
            <div style={{display: 'flex', height: '200px', margin: 'auto'}}>
              <img style={{ margin: 'auto' }} src={Clock} />
            </div>
            <h2 style={{ textAlign: 'center', fontSize: '16px !important', fontWeight: '700', marginBottom:'15px'}}>FIND A PERSONAL SHOPPER</h2>
            <p style={{ textAlign: 'center', lineHeight:'25px', width: '296px', margin: 'auto'}}>Personal Shoppers list their services and all you need to do is search for the right person to assist you on following dates.</p>        
        </div>
        <div style={{ display: 'grid' }}>
            <div style={{display: 'flex', height: '200px', margin: 'auto'}}>
              <img style={{ margin: 'auto' }} src={Go} />
            </div>
            <h2 style={{ textAlign: 'center', fontSize: '16px !important', fontWeight: '700', marginBottom:'15px'}}>FIND A PERSONAL SHOPPER</h2>
            <p style={{ textAlign: 'center', lineHeight:'25px', width: '296px', margin: 'auto'}}>Personal Shoppers list their services and all you need to do is search for the right person to assist you on following dates.</p>        
        </div>
      </Actions>
    </div>
  );
};

export default How;
