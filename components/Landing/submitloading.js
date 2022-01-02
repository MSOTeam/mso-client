import styled , { keyframes }from 'styled-components';

import React from 'react';

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
    width: 60px;
    height: 75px;

  & > div {
    position: absolute;
    top: 33px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
  }
`

const DotOne = styled.div`
  left: 2px;
  animation: ${dot_one} 0.6s infinite;
`

const DotTwo = styled.div`
  left: 6px;
  animation: ${dot_two} 0.6s infinite;
`

const DotThree = styled.div`
  left: 30px;
  animation: ${dot_two} 0.6s infinite;
`

const DotFour = styled.div`
  left: 54px;
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
 