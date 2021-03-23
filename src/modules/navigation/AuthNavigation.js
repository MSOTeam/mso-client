import {
  Archive,
  Broken,
  Fav,
  Logo,
  Plug,
  Unsorted,
  Url,
} from "../../assets/icon";
import React, { useState } from "react";
import styled, { css } from "styled-components";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";

const Navgrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 27px 0 20px 0;
  padding: 0 30px 0 75px;
  @media (max-width: 850px) {
    padding: 0 30px 0 75px;
  }
`;

const Navitem = styled.a`
  cursor: pointer;
  display: flex;
  align-self: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding-left: 30px;
  box-sizing: border-box;
  ${(props) =>
    props.logo &&
    css`
      padding-left: 0;
    `}
  /* &:hover {
    background: whitesmoke;
    padding: 8px;
    border-radius: 100px;
  } */
`;

const Extension = styled.a`
  background: #5649cf;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 27px;
  font-size: 14px;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 300;
  > span {
    margin-left: 10px;
  }
`;

const AddUrl = styled.input`
  display: none;
`;

const Flex = styled.div`
  display: flex;
`;

const AuthNavigation = ({ dispatch }) => {
  const [inputUrl, setInputUrl] = useState(0);

  return (
    <Navgrid>
      <Navitem logo onClick={() => dispatch(push("/"))}>
        <Logo />
      </Navitem>

      <Flex>
        <Extension
          title="Add the tagit extension"
          href="https://chrome.google.com/webstore/category/extensions"
          target="_blank"
        >
          <Plug />
          <span>Click to add extension</span>
        </Extension>
        <AddUrl type="text" />
        {/* <Navitem title="Add url" onClick={() => dispatch(push('/articles/favorites'))}><Url /></Navitem> */}
        {/* <Navitem star onClick={() => dispatch(push('/articles/favorites'))}><Fav/></Navitem>
        <Navitem reminder onClick={() => dispatch(push('/articles/reminder'))}><InProgress/></Navitem>
        <Navitem reminder onClick={() => dispatch(push('/articles/unsorted'))}><Unsorted/></Navitem>
        <Navitem reminder onClick={() => dispatch(push('/articles/archive'))}><Archive/></Navitem> */}
        <Navitem
          title="View favorites"
          onClick={() => dispatch(push("/articles/favorites"))}
        >
          <Fav />
        </Navitem>
        {/* <Navitem progress onClick={() => dispatch(push('/articles/inprogress'))}><InProgressCheckedSmall/><NavName>In progress</NavName></Navitem> */}
        {/* <Navitem reminder onClick={() => dispatch(push('/articles/reminder'))}><ReminderCheckedSmall/><NavName>Reminder</NavName></Navitem> */}
        {/* <Navitem reminder onClick={() => dispatch(push('/articles/unsorted'))}><Unsorted/></Navitem> */}
        {/* <Navitem reminder title="View broken links"onClick={() => dispatch(push('/articles/broken'))}><Broken /></Navitem> */}
        <Navitem
          reminder
          title="View broken links"
          onClick={() => dispatch(push("/articles/unsorted"))}
        >
          <Unsorted />
        </Navitem>
        <Navitem
          reminder
          title="View archived links"
          onClick={() => dispatch(push("/articles/archive"))}
        >
          <Archive />
        </Navitem>
        {/* <Navitem logout onClick={() => dispatch(logout())}><LogOut /></Navitem> */}
      </Flex>
    </Navgrid>
  );
};

AuthNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AuthNavigation);
