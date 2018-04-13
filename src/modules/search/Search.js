import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled'

import SearchImg from '../../assets/img/shop.jpg';
import ShopVideo from '../../assets/video/shop.mp4';

const SearchHeader = styled.div`
  background: url(${SearchImg});
  background-size: cover;
  background-position: center;
`;

const VideoOverlay = styled.div`
  overflow: hidden;
  height: 60vh;
  z-index:-1;
  postition: relative;
`;

const SearchBox = styled.div`
  position: absolute;
  width: 500px;
  height: 50px;
  background: white;
  z-index: 100;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;



class Search extends Component {
  render() {
    return (
    <VideoOverlay>
      <SearchBox>Search</SearchBox>
      <video autoplay="true" loop="true" style={{minHeight:'100%', minWidth:'100%', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
        <source src={ShopVideo} type="video/mp4"/>
        <SearchHeader />
      </video>
    </VideoOverlay>
    //
  )
  }
}
export default Search;
