import { keyframes } from 'styled-components';

export const blob = keyframes`
  from {
    transform: rotate(15deg) translate(-20px,0px) skewX(25deg);
  }
  to {
    transform: rotate(115deg) translate(20px,0px) skewX(-25deg);
  }
`;

export const blob2 = keyframes`
  from {
    transform: rotate(-15deg) translate(20px,0px) skewX(-25deg);

  }
  to {
    transform: rotate(-115deg) translate(-20px,0px) skewX(25deg);
  }
`;

export const arrowBounce = keyframes`
	0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
	40% {
    transform: translateY(-30px);
  }
	60% {
    transform: translateY(-15px);
  }
`;

export const fadeTop = keyframes`
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const fadeBottom = keyframes`
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const fadeRight = keyframes`
  from {
    transform: translateX(30px) rotate(3deg);
  }
  to {
    transform: translateX(0px) rotate(3deg);
    opacity: 1;
  }
`;



export const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const change = keyframes`
  from {
    background: #40359C;
  }
  to {
    background: hsl(181, 66%, 47%);
  }
`;

export const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const height = keyframes`
  0%{
    transform:scaleX(1);
  }
  100% {
    transform:scaleX(0);

  }
`;