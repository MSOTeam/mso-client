import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from '../search/Search';
import How from '../how/How';
import { Flex, Box } from 'grid-styled'
import { color } from '../../styles/color';

class Main extends Component {
  render() {
    return (
      <Flex flexDirection='column'>
        <Search />
        <How/>
        <div style={{ background: color.secondary }}>EXPLORE OUR SHOPPERS</div>
        <div style={{ background: color.lightgrey }}>what do our customers say</div>
        <div style={{ background: color.dark, color: color.light }}>Footer</div>
      </Flex>
    );
  }
}

export default Main;
