import React, { Component } from 'react';
import styled from 'styled-components';
import SearchImg from '../../assets/img/shop.jpg';

const SearchHeader = styled.div`
  background: url(${SearchImg});
  background-size: cover;
  background-position: center;
  height: 70vh;
  margin: 0 2.5vw;
`;

class Search extends Component {
  render() {
    return <SearchHeader />;
  }
}
export default Search;
