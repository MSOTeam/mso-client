import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
import _ from 'lodash';
import axios from 'axios';
import { color } from '../../styles/color';
import Menu from '../../assets/menu.svg';
import Crog from '../../assets/crog.svg';
import Logo from '../../assets/logo_w_text_small.svg';
import Arrow from '../../assets/arrow.svg';
import Close from '../../assets/close.svg';

const SidebarWrapper = styled.div`
  background: ${color.primary};
  position: fixed;
  top: 0;
  height: 100vh;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px 0;
  box-sizing: border-box;
  transition: width 0.3s;
  ${props => props.open && css`
    width: 250px;
  `}
`;

const SidebarItems = styled.div`
  display: none;
  ${props => props.open && css`
    display: flex;
    flex-direction: column;
    height: 80%;
  `}
`;

const SidebarTop = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

const SidebarTopOpen = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px 0 30px;
  align-items: center;
  margin-bottom: 55px;
  height: 30px;
`;

const SidebarItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 20px 30px;
`;


const SidebarItem = styled.div`
  font-size: 0.9em;
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  &:hover {
      cursor: pointer;
    }
  &:first-letter {
    text-transform:capitalize;
  }
  ${props => props.bread && css`
    font-weight: 100;
  `}
  ${props => props.child && css`
    color: #40359C;
  `}
`;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      taglist: [],
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    axios
      .get('article', { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        const arr = [];
        _.each(response.data.articles, (value) => {
          arr.push(value.tags[0]);
        });
        const removeDuplicates = _.uniq(arr);
        const ordered = _.orderBy(removeDuplicates);
        this.setState({ taglist: ordered });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  slide = () => {
    this.setState({ open: !this.state.open });
    this.props.dispatch({ type: 'SIDEBAR_TOGGLE' });
  };

  addTag = () => {
    console.log('added');
  }

  render() {
    const { dispatch } = this.props;
    const { taglist } = this.state;
    const categorys = taglist.map(tag => (
      <SidebarItemWrapper key={tag}>
        <SidebarItem onClick={() => dispatch(push(`${tag}`))}>{tag}</SidebarItem>
        {/* <SidebarItem child><img src={Arrow} alt="" /></SidebarItem> */}
      </SidebarItemWrapper>
    ));

    return (
      <SidebarWrapper open={this.state.open}>
        <SidebarTop>
          {
          this.state.open ? (
            <SidebarTopOpen open={this.state.open}>
              <img src={Logo} alt="logo" onClick={() => dispatch(push('/articles'))} />
              <img src={Close} alt="" onClick={this.slide} style={{padding: '6px'}} />
            </SidebarTopOpen>
          ) : (
            <div style={{ marginLeft: '30px' }}>
              <img src={Menu} alt="menu" onClick={this.slide} />
            </div>
          )
         }
          <SidebarItems open={this.state.open}>
            {/* <SidebarItemWrapper>
              <SidebarItem bread>All</SidebarItem>
            </SidebarItemWrapper> */}
            {categorys}
            <SidebarItemWrapper>
              <SidebarItem onClick={this.addTag}>+</SidebarItem>
            </SidebarItemWrapper>
          </SidebarItems>
        </SidebarTop>
        <img src={Crog} alt="crog" />
      </SidebarWrapper>
    );
  }
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cats: PropTypes.array,
};

Sidebar.defaultProps = {
  cats: [],
};
function mapStateToProps(state) {
  return {
    cats: state.articles.articles,
  };
}

export default connect(mapStateToProps)(Sidebar);
