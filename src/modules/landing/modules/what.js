import React from 'react';
import styled, { css } from 'styled-components';
import { fadeTop, opacity} from '../utility/animation';


const Wrapper = styled.div`
  z-index: 100;
  position: relative;
  padding: 0 10%;
  margin-bottom: 500px;

  animation: ${opacity} 1s ease-in-out;
  animation-fill-mode: both;
  animation-delay: 2.3s;
  @media (min-width: 2150px) {
    padding: 0 25%;
  }
`;

const Headline = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  line-height: 60px;
  color: #fff;
  margin-bottom: 15px;
  letter-spacing: 1px;
  opacity: 0;
  animation: ${fadeTop} 1s ease-in-out;
  animation-fill-mode: forwards;
`;

const P = styled.p`
  font-size: 1.5em;
  font-weight: 100;
  line-height: 34px;
  letter-spacing: 1px;
  color: white;
`;

const Problems = styled.div`
`;

const Problem = styled.div`
  font-size: 1.5em;
  font-weight: 100;
  line-height: 34px;
  letter-spacing: 1px;
  color: white;
`;

const What = () => {
  return (
    <Wrapper>
      {/* <Headline>Trying to solve the content mess and just read it later!</Headline> */}
      <Headline>So much content and knowledge everywhere</Headline>
      <P>We here at tagit are trying to solve the modern problem of content. So many articles you want to read but don't have the time. tagit will help you save that content so you can read it later at the perfect time for you.</P>      
      <Problems>
        <Problem>To many tabs!</Problem>
        <Problem>fda</Problem>
      </Problems>
      <Problems>
        <Problem>To many tabs!</Problem>
        <Problem>Bookmarking hell</Problem>
      </Problems>
    </Wrapper>
  );
}
export default What;
