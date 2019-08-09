import React from 'react';
import styled, { css } from 'styled-components';

import { fadeBottom, fadeRight } from '../utility/animation';
import App from '../assets/app.png';


const ScIntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 0 0 0 10%;
  @media (min-width: 2150px) {
    padding: 0 0 0 25%;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    padding: 0 10%;
  }
`
const ScText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (min-width: 2750px) {
    width: 40%;
  }
  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`

const ScItem = styled.div`
  ${props => props.top && css`
    min-height: 450px;  
    @media (max-width: 760px) {
      min-height: 0;  
    }
  `}  
`

const ScHeadline = styled.h1`
  font-size: 3.5em;
  font-weight: 900;
  line-height: 60px;
  color: white;
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
  @media (max-width: 760px) {
    font-size: 2.3em;
    line-height: 45px;
  }
`

const ScMessage = styled.p`  
  font-size: 1.2em;
  font-weight: 100;
  line-height: 30px;
  color: white;
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.4s; 
`
const ScImg = styled.div`
  background: url( ${App} ) no-repeat;
  transform: rotate(3deg);
  width: 2070px;
  height: 980px;
  margin-left: 52px;    
  position: relative;
  left: 30px;
  opacity: 0;
  animation: ${fadeRight} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.8s;
  @media (max-width: 760px) {
    left: -30px;
    top: 100px;
    margin-bottom: 100px;
  }
`

const Intro = () => {
  return (
    <ScIntroWrapper>      
      <ScText>
        <ScItem top>
          <ScHeadline>
            Save anything and view it  when you want
          </ScHeadline>
          <ScMessage>Tagit is a solution to the modern problem of content. So many articles you want to read but don't have the time. Tagit will help you save that content so you can read it later at the perfect time for you</ScMessage>
        </ScItem>    
        <ScItem />  
        </ScText>
        <ScImg />
    </ScIntroWrapper>
  );
}
export default Intro;
