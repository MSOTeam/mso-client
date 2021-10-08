import { Bin, EditTag, FavSmall, FavSmallChecked } from "../util/icon";
import React, { CSSProperties } from "react";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import { fetcher } from "../util/helpers";
import { set } from "lodash";
import { tokenId } from "../util/state";
import { useRecoilState } from "recoil";

const CardActions = ({ article }) => {
  const [token] = useRecoilState(tokenId);
  const [click, setClick] = useState();

  const url = "http://localhost:5000/article/";
  const { data, error } = useSWR([url, token], fetcher);
  const { mutate } = useSWRConfig();

  const Action = (e, item) => {
    e.preventDefault();
    const tagsArr = article?.tags;
    const index = tagsArr.indexOf(tagsArr);
    if (tagsArr.includes(item)) {
      tagsArr?.splice(index);
      setClick(false);
    } else {
      tagsArr.push(item);
      setClick(true);
    }
    console.log(article.tags, article._id);
  };
  console.log(click)
  return (
    <>
      <Wrapper>
        <Icon click={click} onClick={(e) => Action(e, "favorites")}>
          {click ? <FavSmallChecked /> : <FavSmall />}
        </Icon>
        <Icon onClick={(e) => Action(e, "unsorted")}>
          <Bin />
        </Icon>
      </Wrapper>
      <Wrapper top="50">
        <Icon onClick={(e) => Action(e, "edit")}>
          <EditTag />
        </Icon>
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
  background-color: ${(props) => (props.click ? `#5649cfpx` : "#fff")};

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

export default React.memo(CardActions);
