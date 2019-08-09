import React from 'react';
import styled , { keyframes }from 'styled-components';

const dot_one = keyframes`
    0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const dot_two = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;

const dot_three = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Loading = styled.div`
  display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

  & > div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
  }
`

const DotOne = styled.div`
  left: 8px;
  animation: ${dot_one} 0.6s infinite;
`

const DotTwo = styled.div`
  left: 8px;
  animation: ${dot_two} 0.6s infinite;
`

const DotThree = styled.div`
  left: 32px;
  animation: ${dot_two} 0.6s infinite;
`

const DotFour = styled.div`
  left: 56px;
  animation: ${dot_three} 0.6s infinite;
`

const SubmitLoading = () => {
  return (
    <Loading>
      <DotOne></DotOne>
      <DotTwo></DotTwo>
      <DotThree></DotThree>
      <DotFour></DotFour>
    </Loading>  
  )
}

export default SubmitLoading;
 