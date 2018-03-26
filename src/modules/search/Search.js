import React, { Component } from 'react';
import styled from 'styled-components';
import SearchImg from '../../assets/img/shop.jpg';

const SearchHeader = styled.div`
  background: url(${SearchImg});
  background-size: cover;
  background-position: center;
`;

class Search extends Component {
  render() {
    return <SearchHeader />;
  }
}
export default Search;
