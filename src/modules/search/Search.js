import React, { Component } from 'react';
import styled from 'styled-components';
import SearchImg from '../../assets/img/shop.jpg';
import { Flex, Box } from 'grid-styled'

const SearchHeader = styled.div`
  background: url(${SearchImg});
  background-size: cover;
  background-position: center;
  height: 50vh;
`;

class Search extends Component {
  render() {
    return <SearchHeader />;
  }
}
export default Search;
