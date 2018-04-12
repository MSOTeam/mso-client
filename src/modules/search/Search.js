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
  height: 50vh;
`;


class Search extends Component {
  render() {
    return (
    <VideoOverlay>
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
