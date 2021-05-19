import React, { useEffect, useState } from "react";
import { fadeBottom, fadeRight, shake } from "../utility/animation";
import styled, { css } from "styled-components";

import App from "../assets/landing.png";
import Email from "./email";
import Mock from "../assets/tagit_mock.png";
import Modal from "../../modal/Modal";
import Overlay from "../../navigation/component/Overlay";

const ScIntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 10;
  margin: 0 10% 100px;
  @media (min-width: 2150px) {
    padding: 0 10%;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    padding: 0 10%;
  }
`;

const ScText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 210px;
  width: 500px;

  @media (min-width: 2750px) {
  }
  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`;

const ScItem = styled.div`
  ${(props) =>
    props.top &&
    css`
      @media (max-width: 760px) {
        min-height: 0;
      }
    `}
`;

const ScHeadline = styled.h1`
  font-size: 3.3em;
  font-weight: 900;
  line-height: 50px;
  color: white;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
  margin-bottom: 20px;
  @media (max-width: 760px) {
    font-size: 2.3em;
    line-height: 45px;
  }
`;

const ScMessage = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: white;
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.4s;
`;

const ScImg = styled.div`
  background: url(${Mock}) no-repeat;
  width: 2070px;
  height: 980px;
  position: relative;
  opacity: 0;
  position: absolute;
  left: 574px;
  background-size: contain;
  animation: ${fadeRight} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.8s;
  filter: drop-shadow(11.6248px 11.6248px 33.7118px rgba(0, 0, 0, 0.45));
  @media (min-width: 2150px) {
    left: 974px;
    height: 900px;
  }
  @media (max-width: 760px) {
    left: -30px;
    top: 100px;
    margin-bottom: 100px;
  }
`;

const Img = styled.img`
  width: 70%;
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 2.2s;
`;

const Button = styled.div`
  background: #29c3c6;
  width: 300px;
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
  box-shadow: #28a6c8 0px 0px 35px 10px;
  opacity: 0;
  animation: ${fadeBottom} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.8s;
`;

const Intro = () => {
  const [type, setType] = useState(0);

  useEffect(() => {});

  return (
    <div>
      <ScIntroWrapper>
        <ScText>
          <div>
            {/* <ScHeadline>Collect and keep all of your findings</ScHeadline> */}
            <ScHeadline>Find, save, share and discover content</ScHeadline>
            {/* <ScHeadline>Your ultimate social content manager</ScHeadline> */}
            {/* <ScHeadline>Save anything and view it  when you want</ScHeadline> */}
            {/* <ScMessage>Tagit is a solution to the modern problem of content. So many articles you want to read but don't have the time. Tagit will help you save that content so you can read it later at the perfect time for you</ScMessage> */}
            <ScMessage>
              With so much content available today on the internet the task of
              trying to finish all the articles or watch the videos you find can
              be daunting. Usually it resaults with a cluttered browser with
              either way to many open tabs or a bookmarking mess. With tagit you
              can save it and view it later whenever you want.
            </ScMessage>
            {/* <ScMessage>All your precious findings and inspiration saved to the same place, forever!</ScMessage> */}
            {/* <Button id="signup" onClick={event => setType(event.target.id)}>Get started</Button> */}
            {/* <Button id="signup" onClick={event => setType(event.target.id)}>Request beta access</Button> */}
          </div>
          <Email />
        </ScText>
        <ScImg />
        {/* <Img src={Mock} /> */}
      </ScIntroWrapper>
      <Modal>
        <Overlay type={type} />
      </Modal>
    </div>
  );
};
export default Intro;
