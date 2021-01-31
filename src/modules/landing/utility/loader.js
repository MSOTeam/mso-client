import React from 'react';
import styled , { keyframes }from 'styled-components';
import { LoadingLogo } from '../assets/icon.js';

export const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    z-index: -1;
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  background: #6955E2;
  top: 0;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: .7s;
`
const Logo = styled.div`
  animation: ${opacity} 0.6s ease-in-out infinite;
  animation-direction: alternate;
`

const Loader = () => {
  return (
    <LoaderWrapper>
      <Logo>
        <LoadingLogo />
      </Logo>
    </LoaderWrapper>
  )
}

export default Loader;