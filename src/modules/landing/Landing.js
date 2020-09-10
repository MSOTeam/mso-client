import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './modules/nav';
import Intro from './modules/intro';
import What from './modules/what';
import Email from './modules/email';

import Features from './modules/features';
import Loader from './utility/loader';

const ScApp = styled.div`
  background-image: linear-gradient(#6955E2, #28A6C8);
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  height: 100vh;
`;

const ScCircleTop = styled.div`
  width: 1500px;
  height: 1500px;
  background: rgb(91, 95, 203);
  opacity: 0.6;
  border-radius: 100%;
  position: absolute;
  top: -20%;
  right: -20%;
  z-index: 1;
`

const ScCircleBottom = styled.div`
    width: 1000px;
    height: 1000px;
    border-radius: 100%;
    background: #4384D3;
    position: absolute;
    bottom: -20%;
    left: -20%;
    opacity: 0.3;
`

const EmailWrapper = styled.div`
  width: 100vw;
  background: #564ace;
  height: 500px;
  position: relative;
  z-index:100;
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ScSmall = styled.small`
    width: 100vw;
    background: black;
    color: white;
    position: absolute;
    bottom: 0;
    z-index: 100;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    letter-spacing: 1px;
`

const Text = styled.h1`
  font-size: 3em;
  font-weight: 100;
  line-height: 30px;
  letter-spacing: 1px;
  color: white;
`

const Landing = () => {
  return (
    <ScApp>
      <Loader />
      <Nav />
      <Intro />
      {/* <What/> */}
      {/* <Features /> */}
      <ScCircleTop />
      <ScCircleBottom />
      {/* <EmailWrapper>
        <Text>Want to join the party?</Text>
        <Email/>
      </EmailWrapper> */}
      <ScSmall>Developed in Iceland</ScSmall>
    </ScApp>
  );
};


export default Landing;
