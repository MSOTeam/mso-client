import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actions from '../articles/actions';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
import io from "socket.io-client";
import _ from 'lodash';
import axios from 'axios';
import { color } from '../../styles/color';
import { Menu, Crog, LogoWhite, Close, EditSidebar } from '../../assets/icon';
import Arrow from '../../assets/arrow.svg';

const SidebarWrapper = styled.div`
  background: linear-gradient(122deg, #5649CF, #0b1963);  position: fixed;
  top: 0;
  height: 100vh;
  width: 50px;
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
  @media (max-width: 800px) {
    postioio: ${color.secondary};
  }
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
  margin-bottom: 25px;
  height: 30px;
`;

const SidebarItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 19px 30px;
  &:hover {
    cursor: pointer;
    > div{
      display: block;
    }
  }
`;


const SidebarItem = styled.div`
  font-size: 0.9em;
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  ${props => props.bread && css`
    font-weight: 100;
  `}
  ${props => props.edit && css`
    display: none;
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

  // componentDidMount = () => {
  //   this.fetch();
  // }

  componentDidMount = () => {
    this.fetch();

    //  const socket = io(`http://localhost:5000?token=${localStorage.getItem('token')}`);
    //  socket.on('article', data => console.log(data));

    const options = {
      rememberUpgrade: true,
      transports: ['websocket'],
      secure: false,
      rejectUnauthorized: false,
    };

    const socket = io('http://localhost:5000', options);
    socket.on('article', (data) => {
      this.fetch();
    });
  }

  fetch = () => {
    const token = localStorage.getItem('token');
    axios
      .get('tag', { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        const { tags } = response.data;
        const ordered = _.orderBy(tags);
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

  edit = (e) => {
    console.log("hell");
  };

  addTag = () => {
    console.log('added');
  }

  toggleTag = (tag) => {
    const { match, dispatch } = this.props;
    console.log(this.props);
    // const index = article.tags.indexOf(tag);
    // if(index === -1) {
    //   article.tags.push(tag);
    // } else {
    //   article.tags.splice(index, 1);
    // }

    // dispatch(actions.updateArticle(match.params.id, article ));

    // this.setState({ article })

  }

  render() {
    const { dispatch } = this.props;
    const { taglist } = this.state;
    const categorys = taglist.map(tag => (
      <SidebarItemWrapper key={tag.name}>
        <SidebarItem pops onClick={() => dispatch(push(`/articles/${tag.tag}`))}>{tag.tag}
        {/* <SidebarItem child><img src={Arrow} alt="" /></SidebarItem> */}
        </SidebarItem>
        <SidebarItem edit onClick={this.edit}><EditSidebar/></SidebarItem>
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
            {categorys}
            <SidebarItemWrapper>
              <SidebarItem onClick={() => this.toggleTag('add')}>+</SidebarItem>
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
    cats: state.articles,
  };
}

export default connect(mapStateToProps)(Sidebar);
