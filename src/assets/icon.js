import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { color } from '../styles/color';

const Circle = styled.circle`
  fill: #fff;
  stroke: #5649CF;
  stroke-width: 4;
  ${props => props.bg === true && css`
    fill: #5649CF;
  `}
`;

const Path = styled.path`
  stroke: #5649CF;
  stroke-width: ${props => props.width || 3};
  fill: #fff;
  ${props => props.bg === true && css`
    stroke: #fff;
    fill: #29c3c6;
  `}
`;


// eslint-disable-next-line no-use-before-define
export const GridLayout = () => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.63574 1.5H8.03574V7.9H1.63574V1.5Z" stroke="#202020" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.63574 11.1H8.03574V17.5H1.63574V11.1ZM11.2357 1.5H17.6357V7.9H11.2357V1.5Z" stroke="#202020" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.2358 11.0996H17.6358V17.4996H11.2358V11.0996Z" stroke="#202020" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const ListLayout = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1.18652H17V7.58652H1V1.18652Z" stroke="#202020" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 10.7861H17V17.1861H1V10.7861Z" stroke="#202020" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export const MasonaryLayout = () => {
  return (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.822266 1.5H7.22227V17.5H0.822266V1.5Z" stroke="#202020" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.4224 1.5H16.8224V7.9H10.4224V1.5Z" stroke="#202020" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.4224 11.0996H16.8224V17.4996H10.4224V11.0996Z" stroke="#202020" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};

export const Menu = () => {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.143555" y1="1.17871" x2="19.1434" y2="1.17871" stroke="white" stroke-width="2"/>
      <line x1="0.143555" y1="6.60693" x2="19.1434" y2="6.60693" stroke="white" stroke-width="2"/>
      <line x1="0.143555" y1="12.0361" x2="19.1434" y2="12.0361" stroke="white" stroke-width="2"/>
    </svg>
  );
};

export const Crog = () => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.7929 11.576C17.9529 10.6555 17.9529 9.73499 17.7929 8.77449L19.4737 7.77396C19.5538 7.73394 19.6338 7.6539 19.6738 7.53383C19.7139 7.45379 19.7139 7.33373 19.7139 7.21366C19.2336 5.81293 18.5132 4.57227 17.5127 3.45168C17.4327 3.37164 17.3126 3.33162 17.2326 3.2916C17.1125 3.2916 16.9924 3.2916 16.9124 3.33162L15.2315 4.33215C14.5111 3.73183 13.6707 3.25158 12.7902 2.93141V0.970379C12.7902 0.890337 12.7502 0.770274 12.6702 0.690232C12.5901 0.61019 12.5101 0.530147 12.43 0.490126C10.9493 0.169958 9.46847 0.169958 8.02772 0.490126C7.90765 0.530147 7.82761 0.61019 7.74757 0.690232C7.66753 0.770274 7.66753 0.890337 7.66753 0.970379V2.93141C6.74704 3.25158 5.94662 3.73183 5.22624 4.33215L3.54536 3.33162C3.42529 3.2916 3.30523 3.2916 3.22519 3.2916C3.10513 3.33162 3.02508 3.37164 2.94504 3.45168C1.90449 4.57227 1.18411 5.81293 0.743883 7.21366C0.703862 7.33373 0.703862 7.45379 0.743883 7.53383C0.783904 7.6539 0.863946 7.73394 0.984009 7.77396L2.66489 8.77449C2.50481 9.73499 2.50481 10.6555 2.66489 11.576L0.984009 12.5765C0.863946 12.6565 0.783904 12.7366 0.743883 12.8166C0.703862 12.9367 0.703862 13.0567 0.743883 13.1368C1.18411 14.5775 1.90449 15.8182 2.94504 16.8988C3.02508 16.9788 3.10513 17.0588 3.22519 17.0588C3.30523 17.0989 3.42529 17.0989 3.54536 17.0188L5.22624 16.0183C5.94662 16.6586 6.74704 17.0989 7.66753 17.419V19.3801C7.66753 19.5001 7.66753 19.6202 7.74757 19.7002C7.82761 19.7803 7.90765 19.8603 8.02772 19.8603C9.46847 20.1805 10.9493 20.1805 12.43 19.8603C12.5101 19.8603 12.5901 19.7803 12.6702 19.7002C12.7502 19.6202 12.7902 19.5001 12.7902 19.3801V17.419C13.6707 17.0989 14.5111 16.6586 15.2315 16.0183L16.9124 17.0188C16.9924 17.0989 17.1125 17.0989 17.2326 17.0588C17.3126 17.0588 17.4327 16.9788 17.5127 16.8988C18.5132 15.8182 19.2336 14.5775 19.7139 13.1368C19.7139 13.0567 19.7139 12.9367 19.6738 12.8166C19.6338 12.7366 19.5538 12.6565 19.4737 12.5765L17.7929 11.576ZM13.4306 10.1752C13.4306 11.0557 13.1104 11.8161 12.4701 12.4564C11.8297 13.0968 11.1093 13.3769 10.2289 13.3769C9.34841 13.3769 8.58801 13.0968 7.94767 12.4564C7.30734 11.8161 7.02719 11.0557 7.02719 10.1752C7.02719 9.29476 7.30734 8.57438 7.94767 7.93404C8.58801 7.29371 9.34841 6.97354 10.2289 6.97354C11.1093 6.97354 11.8297 7.29371 12.4701 7.93404C13.1104 8.57438 13.4306 9.29476 13.4306 10.1752Z" fill="white"/>
    </svg>
  );
};

export const LogoWhite = () => {
  return (
    <svg width="81" height="30" viewBox="0 0 81 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9274 19.3926C16.9274 22.867 15.3685 24.6627 12.2507 24.7795C9.13817 24.66 7.58188 22.8644 7.58188 19.3929V13.4744H14.2127V8.30157H7.58188V0.267212H0.70315L0.703125 8.30157L0.70315 13.4744V19.503C0.70315 22.9515 1.60197 25.5563 3.39961 27.3172C5.19725 29.0415 7.98544 29.9036 11.7642 29.9036C11.8263 29.9036 11.9101 29.9036 12.0147 29.9014C12.0997 29.9023 12.1851 29.9027 12.2708 29.9027C12.3527 29.9027 12.4343 29.9023 12.5157 29.9015C12.6106 29.9033 12.6873 29.9033 12.7452 29.9033C16.5239 29.9033 19.312 29.0412 21.1097 27.3169C22.9073 25.556 23.8062 22.9512 23.8062 19.5027V15.3716L23.8061 8.31006L16.9274 8.31002V15.3716V19.3926ZM16.8408 0.267212H23.8381V5.59756H16.8408V0.267212Z" fill="#fff"/>
      <path d="M40.9969 21.6068C41.3638 21.6068 41.6989 21.5828 42.002 21.535L41.9541 22.4683C41.6191 22.5161 41.2601 22.5401 40.8772 22.5401C39.6807 22.5401 38.7553 22.1971 38.1012 21.511C37.4631 20.809 37.144 19.8757 37.144 18.7111V11.6753H34.8227V10.8138H37.144V7.2002H38.1491V10.8138H41.643V11.6753H38.1491V18.4957C38.1491 19.5168 38.3884 20.2905 38.867 20.817C39.3456 21.3435 40.0556 21.6068 40.9969 21.6068Z" fill="#fff"/>
      <path d="M48.6657 10.5266C51.3141 10.5266 52.6383 11.9545 52.6383 14.8103V22.3965H51.6092V20.2666C51.2582 21.0005 50.7477 21.5669 50.0776 21.9657C49.4235 22.3646 48.6737 22.564 47.8281 22.564C47.0942 22.564 46.4162 22.4124 45.794 22.1093C45.1877 21.8062 44.7011 21.3914 44.3342 20.8649C43.9832 20.3224 43.8077 19.7321 43.8077 19.094C43.8077 18.2325 44.031 17.5704 44.4778 17.1077C44.9404 16.6291 45.6903 16.2861 46.7273 16.0787C47.7803 15.8713 49.248 15.7676 51.1306 15.7676H51.6092V14.7624C51.6092 13.6297 51.3859 12.8081 50.9392 12.2975C50.4924 11.7711 49.7825 11.5078 48.8093 11.5078C48.0594 11.5078 47.3654 11.6115 46.7273 11.8189C46.1051 12.0104 45.451 12.3294 44.7649 12.7762L44.2863 11.9146C44.8766 11.4839 45.5547 11.1488 46.3205 10.9095C47.1022 10.6543 47.884 10.5266 48.6657 10.5266ZM47.8281 21.5589C48.546 21.5589 49.1922 21.3914 49.7665 21.0563C50.3409 20.7053 50.7876 20.2267 51.1067 19.6205C51.4417 19.0142 51.6092 18.3282 51.6092 17.5624V16.7009H51.1545C49.4794 16.7009 48.203 16.7727 47.3256 16.9162C46.4481 17.0439 45.8339 17.2752 45.4829 17.6103C45.1319 17.9293 44.9564 18.408 44.9564 19.0461C44.9564 19.78 45.2276 20.3863 45.77 20.8649C46.3125 21.3276 46.9985 21.5589 47.8281 21.5589Z" fill="#fff"/>
      <path d="M66.2188 10.8138V21.8461C66.2188 23.5053 65.8279 24.7577 65.0462 25.6033C64.2644 26.4488 63.0998 26.8716 61.5522 26.8716C59.6218 26.8716 57.9865 26.3212 56.6464 25.2204L57.125 24.3828C57.9227 24.9571 58.6406 25.348 59.2788 25.5554C59.917 25.7787 60.6828 25.8904 61.5762 25.8904C62.7727 25.8904 63.6821 25.5554 64.3043 24.8853C64.9265 24.2312 65.2376 23.266 65.2376 21.9896V19.4769C64.9026 20.3065 64.3761 20.9447 63.6582 21.3914C62.9562 21.8221 62.1027 22.0375 61.0976 22.0375C60.0765 22.0375 59.1671 21.7982 58.3694 21.3196C57.5877 20.841 56.9734 20.1629 56.5267 19.2854C56.096 18.408 55.8806 17.4028 55.8806 16.2701C55.8806 15.1374 56.096 14.1402 56.5267 13.2787C56.9734 12.4012 57.5877 11.7232 58.3694 11.2446C59.1671 10.7659 60.0765 10.5266 61.0976 10.5266C62.0867 10.5266 62.9323 10.742 63.6343 11.1728C64.3362 11.6035 64.8627 12.2178 65.2137 13.0155V10.8138H66.2188ZM61.0976 21.0563C62.3898 21.0563 63.3949 20.6336 64.1129 19.788C64.8468 18.9265 65.2137 17.7538 65.2137 16.2701C65.2137 14.7864 64.8468 13.6217 64.1129 12.7762C63.3949 11.9306 62.3898 11.5078 61.0976 11.5078C59.8212 11.5078 58.8081 11.9306 58.0583 12.7762C57.3244 13.6217 56.9575 14.7864 56.9575 16.2701C56.9575 17.7698 57.3244 18.9424 58.0583 19.788C58.8081 20.6336 59.8212 21.0563 61.0976 21.0563Z" fill="#fff"/>
      <path d="M70.2952 10.8138H71.3003V22.3965H70.2952V10.8138ZM71.5635 6.07544V7.5831H70.0319V6.07544H71.5635Z" fill="#fff"/>
      <path d="M79.698 21.6068C80.065 21.6068 80.4 21.5828 80.7031 21.535L80.6553 22.4683C80.3202 22.5161 79.9613 22.5401 79.5784 22.5401C78.3818 22.5401 77.4565 22.1971 76.8024 21.511C76.1642 20.809 75.8451 19.8757 75.8451 18.7111V11.6753H73.5238V10.8138H75.8451V7.2002H76.8502V10.8138H80.3442V11.6753H76.8502V18.4957C76.8502 19.5168 77.0895 20.2905 77.5682 20.817C78.0468 21.3435 78.7567 21.6068 79.698 21.6068Z" fill="#fff"/>
    </svg>
  );
};

export const Close = () => {
  return (
    <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1014 9.5L18.5029 4.09849C19.1657 3.43565 19.1657 2.36097 18.5029 1.69759L17.3024 0.497131C16.6396 -0.16571 15.5649 -0.16571 14.9015 0.497131L9.5 5.89864L4.09849 0.497131C3.43565 -0.16571 2.36097 -0.16571 1.69759 0.497131L0.497131 1.69759C-0.16571 2.36043 -0.16571 3.43511 0.497131 4.09849L5.89864 9.5L0.497131 14.9015C-0.16571 15.5643 -0.16571 16.639 0.497131 17.3024L1.69759 18.5029C2.36043 19.1657 3.43565 19.1657 4.09849 18.5029L9.5 13.1014L14.9015 18.5029C15.5643 19.1657 16.6396 19.1657 17.3024 18.5029L18.5029 17.3024C19.1657 16.6396 19.1657 15.5649 18.5029 14.9015L13.1014 9.5Z" fill="white"/>
    </svg>
  );
};

export const Fav = () => {
  return (
    <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1014 9.5L18.5029 4.09849C19.1657 3.43565 19.1657 2.36097 18.5029 1.69759L17.3024 0.497131C16.6396 -0.16571 15.5649 -0.16571 14.9015 0.497131L9.5 5.89864L4.09849 0.497131C3.43565 -0.16571 2.36097 -0.16571 1.69759 0.497131L0.497131 1.69759C-0.16571 2.36043 -0.16571 3.43511 0.497131 4.09849L5.89864 9.5L0.497131 14.9015C-0.16571 15.5643 -0.16571 16.639 0.497131 17.3024L1.69759 18.5029C2.36043 19.1657 3.43565 19.1657 4.09849 18.5029L9.5 13.1014L14.9015 18.5029C15.5643 19.1657 16.6396 19.1657 17.3024 18.5029L18.5029 17.3024C19.1657 16.6396 19.1657 15.5649 18.5029 14.9015L13.1014 9.5Z" fill="white"/>
    </svg>
  );
};

export const InProgress = () => {
  return (
    <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M13.1014 9.5L18.5029 4.09849C19.1657 3.43565 19.1657 2.36097 18.5029 1.69759L17.3024 0.497131C16.6396 -0.16571 15.5649 -0.16571 14.9015 0.497131L9.5 5.89864L4.09849 0.497131C3.43565 -0.16571 2.36097 -0.16571 1.69759 0.497131L0.497131 1.69759C-0.16571 2.36043 -0.16571 3.43511 0.497131 4.09849L5.89864 9.5L0.497131 14.9015C-0.16571 15.5643 -0.16571 16.639 0.497131 17.3024L1.69759 18.5029C2.36043 19.1657 3.43565 19.1657 4.09849 18.5029L9.5 13.1014L14.9015 18.5029C15.5643 19.1657 16.6396 19.1657 17.3024 18.5029L18.5029 17.3024C19.1657 16.6396 19.1657 15.5649 18.5029 14.9015L13.1014 9.5Z" />
    </svg>
  );
};

export const Reminder = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 22">
      <Path bg={props.bg} width="1" d="M11,2A10,10,0,1,0,21,12,10,10,0,0,0,11,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,11,20Zm3.1-7.37L12,11.42V7a1,1,0,0,0-2,0v5s0,.08,0,.12a.65.65,0,0,0,.05.2.89.89,0,0,0,.08.17.86.86,0,0,0,.1.16l.16.13.09.09,2.6,1.5a1,1,0,0,0,.5.13,1,1,0,0,0,.5-1.87Z"/>
    </svg>  );
};

export const Archive = (props) => {
  return (
    <svg width="19" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path bg={props.bg} width="1" d="M0.9375 13.3848C0.9375 13.9033 1.35645 14.3223 1.875 14.3223H13.125C13.6436 14.3223 14.0625 13.9033 14.0625 13.3848V4.94727H0.9375V13.3848ZM5.625 7.17383C5.625 6.98047 5.7832 6.82227 5.97656 6.82227H9.02344C9.2168 6.82227 9.375 6.98047 9.375 7.17383V7.4082C9.375 7.60156 9.2168 7.75977 9.02344 7.75977H5.97656C5.7832 7.75977 5.625 7.60156 5.625 7.4082V7.17383ZM14.0625 1.19727H0.9375C0.418945 1.19727 0 1.61621 0 2.13477V3.54102C0 3.79883 0.210937 4.00977 0.46875 4.00977H14.5312C14.7891 4.00977 15 3.79883 15 3.54102V2.13477C15 1.61621 14.5811 1.19727 14.0625 1.19727Z" stroke="#5649CF"/>
    </svg>
  );
};
