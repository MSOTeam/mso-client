import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../../modal/Modal';
import Overlay from '../../navigation/component/Overlay';
import { fadeBottom, fadeRight, shake } from '../utility/animation';
import App from '../assets/app.png';


const ScIntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  z-index: 10;
  padding: 0 10% 100px;
  align-items: center;
  @media (min-width: 2150px) {
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
  margin-bottom: 60px;
  @media (min-width: 2750px) {
  }
  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`

const ScItem = styled.div`
  text-align: center;
  ${props => props.top && css`
    @media (max-width: 760px) {
      min-height: 0;  
    }
  `}  
`;

const ScHeadline = styled.h1`
  font-size: 3.5em;
  font-weight: 900;
  line-height: 60px;
  color: white;
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
  margin-bottom: 40px;
  @media (max-width: 760px) {
    font-size: 2.3em;
    line-height: 45px;
  }
`;

const ScMessage = styled.p`  
  font-size: 1.5em;
  font-weight: 100;
  line-height: 30px;
  letter-spacing: 1px;
  color: white;
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.4s; 
`;

const ScImg = styled.div`
  background: url( ${App} ) no-repeat;
  width: 2070px;
  height: 980px;
  position: relative;
  opacity: 0;
  animation: ${fadeRight} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.8s;
  @media (max-width: 760px) {
    left: -30px;
    top: 100px;
    margin-bottom: 100px;
  }
`;

const Img = styled.img`
  width: 100%;
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2.2s;
`;

const Button = styled.div`
  background: #29C3C6;
  width: 200px;
  margin: auto;
  margin-top: 85px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 5px;
  font-size: 1.5em;
  letter-spacing: 1px;
  font-weight: 600;
  padding: 7px 15px;
  box-shadow: #28a6c8 0px 0px 33px 2px;
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.8s;
`;

const Intro = () => {
  const [type, setType] = useState(0);

  useEffect(() => {
    setType(' ');
  });


  const handleClick = ({ event }) => {
    console.log(event)
    setType(type === event);
  };

  return (
    <>
      <ScIntroWrapper>
        <ScText>
          <ScItem top>
            <ScHeadline>
              Save anything and view it  when you want
            </ScHeadline>
            {/* <ScMessage>Tagit is a solution to the modern problem of content. So many articles you want to read but don't have the time. Tagit will help you save that content so you can read it later at the perfect time for you</ScMessage> */}
            <ScMessage>All your precious findings and inspiration saved to the same place, forever!</ScMessage>
            <Button id="signup" onClick={handleClick}>Get started</Button>
          </ScItem>
          <ScItem />
        </ScText>
        {/* <ScImg /> */}
        <div>
          <Img src={App} />
        </div>
      </ScIntroWrapper>
      <Modal>
        <Overlay type={type} />
      </Modal>
    </>
  );
}
export default Intro;
