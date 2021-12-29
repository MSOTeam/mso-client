import { Dots, FavSmall, FavSmallChecked } from "../util/icon";
import styled, { css } from "styled-components";
import { useEffect, useRef, useState } from "react";

import CardOverview from "./CardOverview";
import React from "react";
import _ from "lodash";
import { dataRefreshState } from "../util/state";
import { useRecoilState } from "recoil";

const CardActions = ({ article, tags, id }) => {
  // const [token] = useRecoilState(tokenId);
    const [dataRefresh, setDataRerfresh] = useRecoilState(dataRefreshState);

  const [click] = useState();
  const [icon, setIcon] = useState(false);
  const [dropdownState, setDropdownState] = useState(false);
  const clickRef = useRef();

  const Favs = (e) => {
    e.preventDefault();
    setIcon(!icon)
    setDataRerfresh(true)
    tags?.includes("favorites")
      ? fetch("/api/removeTag", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            tag: "favorites",
          }),
        })
      : fetch("/api/addTag", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            tag: "favorites",
          }),
        });
  };
  
  const Delete = (e, item) => {
    e.preventDefault();
  };

  const Edit = (e) => {
    e.preventDefault();
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
  }, []);

  return (
    <>
      <Wrapper>
        <Icon
        icon
          onClick={(e) => Favs(e, "favorites")}
        >
          {article?.tags?.includes("favorites") || icon ? (
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
              <Item onClick={(e) => Edit(e)} padding="10px 15px 5px 15px">
                <CardOverview tag={tags} id={id}>Edit</CardOverview>
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
  background-color: ${(props) => (props.icon ? `#5649cf` : "#fff")};
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
