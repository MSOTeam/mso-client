import React, { Component } from 'react';
import styled from 'styled-components';

const SearchHeader = styled.div`
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
    <VideoOverlay />
    //
  )
  }
}
export default Search;
