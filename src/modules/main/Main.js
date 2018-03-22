import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Search from '../search/Search';
import How from '../how/How';
import { color } from '../../styles/color';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25% 30vh 200px 100px 100px 100px 100px;
  margin: auto;
`;

class Main extends Component {
  render() {
    return (
      <Grid>
        <Search />
        <How />
        <div style={{ background: color.secondary }}>EXPLORE OUR SHOPPERS</div>
        <div style={{ background: color.lightgrey }}>
          what do our customers say
        </div>
        <div style={{ background: color.dark, color: color.light }}>Footer</div>
      </Grid>
    );
  }
}

export default Main;
