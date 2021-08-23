import { useEffect, useState } from 'react';
import { fetcher } from '../util/helpers'
import styled from 'styled-components';
import useSWR from 'swr'
import { sidebarStatus, tokenId } from "../util/state";
import { useRecoilState } from "recoil";
import { LogoWhite } from "../util/icon";
import Link from 'next/link'

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
  cursor: pointer;
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
  const [token,] = useRecoilState(tokenId);
  const [sidebar, setSidebar] = useRecoilState(sidebarStatus);

  const url = 'http://localhost:5000/tag';

  const { data, error } = useSWR(
    [url, token],
    fetcher
  );

  return (
    <Wrapper>
      <Link href={`/`}>
        <LogoWrapper>
          <LogoWhite />
        </LogoWrapper>
      </Link>
      {data?.tags?.length >= 1 && data?.tags?.map((item) => (
        <Link href={`/${item?.tag}`}>
          <Item>{item?.tag}</Item>
        </Link>

      ))}
    </Wrapper>
  );
};

export default Sidebar;
