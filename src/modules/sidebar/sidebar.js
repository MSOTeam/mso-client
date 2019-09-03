import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
import _ from 'lodash';
import axios from 'axios';
import { color } from '../../styles/color';
import { Menu, Crog, LogoWhite, Close } from '../../assets/icon';
import Arrow from '../../assets/arrow.svg';

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
  z-index: 100;
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
  overflow: scroll;
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
  margin: 0 30px 19px 30px;
`;


const SidebarItem = styled.div`
  font-size: 1em;
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  ${props => props.bread && css`
    font-weight: 100;
  `}
  ${props => props.child && css`
    color: #5649CF;
    letter-spacing: 1px;
  `}
  &:hover {
    cursor: pointer;
    > div{
      font-size: 1em;
      color: #40359C;
      letter-spacing: 1px;
      font-weight: 700;
      width: auto;
      position: relative;
      top: 2px;
    }
  }
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
    this.fetch();
  }

  fetch = () => {
    const token = localStorage.getItem('token');
    axios
      .get('tag', { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        const { tags } = response.data;
        const ordered = _.orderBy(tags);
        this.setState({ taglist: ordered });
        console.log(response.data)
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
      <SidebarItemWrapper key={tag.name}>
        <SidebarItem pops onClick={() => dispatch(push(`/articles/${tag.tag}`))}>{tag.tag}
        {/* <SidebarItem child><img src={Arrow} alt="" /></SidebarItem> */}
        <SidebarItem child>Edit</SidebarItem>
        </SidebarItem>
      </SidebarItemWrapper>
    ));

    return (
      <SidebarWrapper open={this.state.open}>
        <SidebarTop>
          {
          this.state.open ? (
            <SidebarTopOpen open={this.state.open}>
              <div style={{ cursor:'pointer'}} onClick={() => dispatch(push('/'))}>
                <LogoWhite />
              </div>
              <div style={{ cursor:'pointer', padding: '6px' }} onClick={this.slide} >
                <Close />
              </div>
            </SidebarTopOpen>
          ) : (
            <div style={{ cursor:'pointer', display: 'flex', justifyContent: 'center' }} onClick={this.slide}>
              <Menu />
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
        <div style={{ cursor:'pointer', display: 'flex', justifyContent: 'center' }} onClick={() => dispatch(push('/settings'))} >
          <Crog />
        </div>
      </SidebarWrapper>
    );
  }
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
