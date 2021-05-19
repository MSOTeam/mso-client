import * as actions from "../articles/actions";

import { Close, Crog, EditSidebar, LogoWhite, Menu } from "../../assets/icon";
import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";

import Arrow from "../../assets/arrow.svg";
import { PropTypes } from "prop-types";
import _ from "lodash";
import axios from "axios";
import { color } from "../../styles/color";
import { connect } from "react-redux";
import io from "socket.io-client";
import { push } from "react-router-redux";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const SidebarWrapper = styled.div`
  background: linear-gradient(122deg, #5649cf, #0b1963);
  position: fixed;
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
  ${(props) =>
    props.open &&
    css`
      width: 250px;
    `}
  @media (max-width: 800px) {
    postioio: ${color.secondary};
  }
`;

const SidebarItems = styled.div`
  display: none;
  ${(props) =>
    props.open &&
    css`
      display: flex;
      flex-direction: column;
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
    > div {
      display: block;
    }
  }
  ${({ open, background }) => css`
    ${open &&
      css`
        animation: ${fadeIn} 0.2s linear;
      `}
    ${background &&
      css`
        background: none;
      `}
  `};
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
  width: 90%;
  ${(props) =>
    props.bread &&
    css`
      font-weight: 100;
    `}
  ${(props) =>
    props.edit &&
    css`
      display: none;
      width: 10%;
    `}
`;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      taglist: [],
      edits: [],
    };
  }

  componentDidMount = () => {
    this.fetch();

    const options = {
      rememberUpgrade: true,
      transports: ["websocket"],
      secure: false,
      rejectUnauthorized: false,
    };

    const socket = io("https://tagit-api.herokuapp.com", options);
    socket.on("article", (data) => {
      if (data.socket === "new article") {
        this.fetch();
      }
    });
  };

  fetch = () => {
    const token = localStorage.getItem("token");
    axios
      .get("tag", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        const { tags } = response.data;
        const ordered = _.orderBy(tags);
        this.setState({ taglist: ordered });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  slide = () => {
    this.setState({ open: !this.state.open });
    this.props.dispatch({ type: "SIDEBAR_TOGGLE" });
  };
  addTag = () => {
    console.log("added");
  };

  toggleTag = (tag) => {
    const { match, dispatch } = this.props;
    // const index = article.tags.indexOf(tag);
    // if(index === -1) {
    //   article.tags.push(tag);
    // } else {
    //   article.tags.splice(index, 1);
    // }

    // dispatch(actions.updateArticle(match.params.id, article ));

    // this.setState({ article })
  };

  openEdit = (tag) => {
    const edits = this.state.edits;
    edits.push({ tag, newTag: tag });
    this.setState({ edits });
  };

  save = ({ tag, newTag }) => {
    const { dispatch } = this.props;
    const { taglist } = this.state;

    const index = _.findIndex(taglist, (o) => {
      return o.tag === tag;
    });

    taglist[index].tag = newTag;

    this.setState({ taglist });  
    
    const token = localStorage.getItem("token");
    axios
      .put(
        `${"/tag"}`,
        { tag, newTag },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {        
        if (decodeURIComponent(window.location.pathname) === `/articles/${tag}`) {
          dispatch(push(`/articles/${newTag}`));
        } else
        {
          this.fetch();
        } 
      })
      .catch((error) => {
        console.log(error);
      });
    this.closeEdit(tag);
    
  };

  closeEdit = (tag) => {
    const edits = this.state.edits;
    _.remove(edits, (o) => {
      return o.tag === tag;
    });
    this.setState({ edits });
  };

  onKey = (e, index, tag, edits) => {
    e.key === "Escape" && this.closeEdit(tag);
    e.key === "Enter" && this.save(edits);
  };

  onChange = (e, index) => {
    const { edits } = this.state;
    edits[index].newTag = e.target.value;
    this.setState({ edits });
  };

  content = (tag) => {
    const { dispatch } = this.props;
    const { edits } = this.state;
    const index = _.findIndex(edits, (o) => {
      return o.tag === tag.tag;
    });

    if (index > -1) {
      return (
        <SidebarItemWrapper
          background={true}
          key={tag.name}
          open={this.state.open}
          style={{ position: "relative", marginBottom: "33px" }}
        >
          <div
            style={{
              position: "absolute",
              top: "-7px",
            }}
          >
            <input
              style={{
                height: "25px",
                borderRadius: "3px",
                border: "none",
                paddingLeft: "5px",
                fontSize: "0.9em",
                outline: "none",
              }}
              type="text"
              value={edits[index].newTag}
              onChange={(e) => this.onChange(e, index)}
              onKeyDown={(e) => this.onKey(e, index, tag.tag, edits[index])}
            />
          </div>
        </SidebarItemWrapper>
      );
    }

    return (
      <SidebarItemWrapper key={tag.name} open={this.state.open}>
        <SidebarItem
          pops
          onClick={() => dispatch(push(`/articles/${encodeURIComponent(tag.tag)}`))}
        >
          {tag.tag}
        </SidebarItem>
        <SidebarItem edit onClick={() => this.openEdit(tag.tag)}>
          <EditSidebar />
        </SidebarItem>
      </SidebarItemWrapper>
    );
  };

  render() {
    const { dispatch } = this.props;
    const { taglist, edits } = this.state;

    return (
      <SidebarWrapper open={this.state.open}>
        <SidebarTop>
          {this.state.open ? (
            <SidebarTopOpen open={this.state.open}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(push("/"))}
              >
                <LogoWhite />
              </div>
              <div
                style={{ cursor: "pointer", padding: "6px" }}
                onClick={this.slide}
              >
                <Close />
              </div>
            </SidebarTopOpen>
          ) : (
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={this.slide}
            >
              <Menu />
            </div>
          )}
          <SidebarItems open={this.state.open}>
            {taglist.map((tag) => this.content(tag))}
            {/* <SidebarItemWrapper>
              <SidebarItem onClick={() => this.toggleTag("add")}>+</SidebarItem>
            </SidebarItemWrapper> */}
          </SidebarItems>
        </SidebarTop>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => dispatch(push("/settings"))}
        >
          <Crog />
        </div>
      </SidebarWrapper>
    );
  }
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: {
    params: {
      tag: "",
    },
  },
};

Sidebar.defaultProps = {
  cats: [],
  match: PropTypes.object,
};
function mapStateToProps(state) {
  return {
    cats: state.articles,
  };
}

export default connect(mapStateToProps)(Sidebar);
