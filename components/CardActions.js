import { Bin, Dots, EditTag, FavSmall, FavSmallChecked } from "../util/icon";
import React, { CSSProperties } from "react";
import _, { set } from "lodash";
import styled, { css } from "styled-components";
import { useEffect, useRef, useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import axios from "axios";
import { fetcher } from "../util/helpers";
import { tokenId } from "../util/state";
import { useRecoilState } from "recoil";

const CardActions = ({ article }) => {
  const [token] = useRecoilState(tokenId);
  const [click, setClick] = useState();
  const [dropdownState, setDropdownState] = useState(false);
  const clickRef = useRef();

  const url = "http://localhost:5000/article/";

  const Favs = (e, item) => {
    e.preventDefault();
    var id = article._id;
    const tagsArr = article?.tags;
    const index = tagsArr.indexOf(tagsArr);
    if (tagsArr.includes(item)) {
      tagsArr?.splice(index);
      setClick(false);
    } else {
      tagsArr.push(item);
      setClick(true);
    }
    axios.put(
      url,
      { id, article },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  const Delete = (e, item) => {
    e.preventDefault();
    var id = article._id;
    const tagsArr = article?.tags;
    while (tagsArr.length > 0) {
      tagsArr.pop();
    }
    tagsArr.push("archive");
    axios.put(
      url,
      { id, article },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownState(!dropdownState);
  };

  const handleClick = (e) => {
    if (clickRef.current && !clickRef.current.contains(e.target)) {
      setDropdownState(!dropdownState);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <>
      <Wrapper>
        <Icon
          click={article?.tags?.includes("favorites")}
          onClick={(e) => Favs(e, "favorites")}
        >
          {click || article?.tags?.includes("favorites") ? (
            <FavSmallChecked />
          ) : (
            <FavSmall />
          )}
        </Icon>
        <Icon onClick={(e) => toggleDropdown(e)}>
          <Dots />
        </Icon>
        {dropdownState && (
          <>
            <Arrow />
            <Dropdown ref={clickRef}>
              <Item
                // onClick={(e) => Action(e, "edit")}
                padding="10px 15px 5px 15px"
              >
                Edit
              </Item>
              <Item
                onClick={(e) => Delete(e, "archive")}
                padding="5px 15px 10px 15px"
              >
                Remove
              </Item>
            </Dropdown>
          </>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  right: 10px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  top: ${(props) => (props.top ? `${props.top}px` : "10px")};
`;

const Icon = styled.div`
  background-color: ${(props) => (props.click ? `#5649cf` : "#fff")};
  position: relative;
  z-index: 1000000;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  box-shadow: #5649cf 0px 0px 13px -4px;
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  background: white;
  position: absolute;
  top: 45px;
  right: 0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 31%) 0px 2px 16px 0px;
  &::before {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
  }
`;

const Item = styled.div`
  padding: ${(props) => (props.padding ? `${props.padding}` : "10px 10px")};
  transition: all 0.2s;
  &:hover {
    text-decoration: underline;
  }
`;

const Arrow = styled.div`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;
  top: 43px;
  right: 11px;
  transform: rotate(-135deg);
`;

export default React.memo(CardActions);
