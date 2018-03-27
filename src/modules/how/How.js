import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled'
import media  from '../../styles/grid';
import SearchImg from '../../assets/img/search_img.jpg';
import Clock from '../../assets/img/clock.svg';
import SearchSVG from '../../assets/img/search.svg';
import Go from '../../assets/img/go.svg';
import { color } from '../../styles/color';
import { go } from 'react-router-redux/actions';

const Headline = styled(Flex)`
  font-size: 32px !important;
  text-align: center;
  font-weight: 100;
  letter-spacing: 2px;
  justify-content: center;
`;

const Howcontainer = styled(Flex)`
  background: ${color.light};
  width: 60vw;
  margin: auto; 
  height: 700px;
  justify-content: space-evenly;
  ${media.desktop`padding: 0 20px;`}
  ${media.tablet`padding: 0 10px;`}
  ${media.phone`padding: 0 5px;`}
`;


const Howitems = styled(Flex)`
  justify-content: space-between;
`;

const Item = styled(Flex)`
  width: 500px;
  position: relative;
`;

const Itemimg = styled.img`
  margin-bottom:50px;
  position: relative;
  z-index: 2;
`;

const Shape = styled.div `
  height: 0;
  width: 42px;
  position: absolute;
  display: flex;
  align-self: center;
  ${props => props.search && css `
    border-bottom: 87px solid #F7F7F7;
    border-left: 39px solid transparent;
    border-right: 28px solid transparent;
    transform: rotate(56deg);

  `}
  ${props => props.clock && css `
    border-top: 80px solid #F7F7F7;
    border-left: 46px solid transparent;
    border-right: 18px solid transparent;
    transform: rotate(25deg);
  `}
  ${props => props.go && css `
    border-top: 100px solid #F7F7F7;
    border-left: 26px solid transparent;
    border-right: 58px solid transparent;
    transform: rotate(77deg);
  `}
`;

const Itemtext = styled.p`
  text-align: center; 
  ${props => props.big && css`
    font-size: 20px !important;
    font-weight: 600; 
    margin-bottom: 15px;
  `} 
  ${props => props.small && css`
    text-align: center;
    line-height: 30px;
    font-size: 18px !important;
    font-weight: 100;
  `}
`;


const How = () => {
  return (
    <Howcontainer flexDirection='Column'>
      <Headline>How it works</Headline>
      <Howitems>
        <Item flexDirection='Column' width={[ 1, 1/3 ]} px={30} >
          <Itemimg search src={SearchSVG} />
          <Shape search />
          <Itemtext big>FIND A PERSONAL SHOPPER</Itemtext>
          <Itemtext small>Personal Shoppers list their services and all you need to do is search for the right person to assist you on following dates.</Itemtext>
        </Item>
        <Item flexDirection='Column' width={[ 1, 1/3 ]} px={30} >
          <Itemimg src={Clock} />
          <Shape clock />
          <Itemtext big>BOOK AN APPOINTMENT</Itemtext>
          <Itemtext small>You can book an appointment on all available dates and time, get in touch with your Personal Shopper and start planning your exclusive shopping trip.</Itemtext>
        </Item>
        <Item flexDirection='Column' width={[ 1, 1/3 ]} px={30} >
          <Itemimg src={Go} />
          <Shape go />
          <Itemtext big>GET GOING</Itemtext>
          <Itemtext small>All you need to do is to get to the place that you and your Personal Shopper agree upon as a meeting point.</Itemtext>
        </Item>
      </Howitems>
    </Howcontainer>
  );
};

export default How;
