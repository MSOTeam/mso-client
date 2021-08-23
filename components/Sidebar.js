import { useEffect, useState } from 'react';
import { fetcher } from '../util/helpers'
import styled from 'styled-components';
import useSWR from 'swr'
import { sidebarStatus, tokenId } from "../util/state";
import { useRecoilState } from "recoil";
import { LogoWhite } from "../util/icon";

const Wrapper = styled.div`
  background: linear-gradient(122deg, rgb(86, 73, 207), rgb(11, 25, 99));
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  padding: 20px 30px;
  position: sticky;
  top: 0;
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
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const LogoWrapper = styled.div`
  margin: 10px 0;
`;

const Item = styled.div`
  font-size: 0.9em;
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  margin-bottom: 20px;
  cursor: pointer;
  margin-right: 20px;
`;

const Sidebar = () => {
  const [token, setToken] = useRecoilState(tokenId);
  const [sidebar, setSidebar] = useRecoilState(sidebarStatus);

  const url = 'http://localhost:5000/tag';

  const { data, error } = useSWR(
    [url, token],
    fetcher
  );

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoWhite />
      </LogoWrapper>
      {data?.tags?.length >= 1 && data?.tags?.map((item) => (
        <Item onClick={() => setSidebar(!sidebar)}>{item?.tag}</Item>
      ))}
    </Wrapper>
  );
};

export default Sidebar;
