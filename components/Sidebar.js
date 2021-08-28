import { Close, LogoWhite, Menu } from "../util/icon";
import { sidebarStatus, tokenId } from "../util/state";

import Link from 'next/link'
import { fetcher } from '../util/helpers'
import styled from 'styled-components';
import { useRecoilState } from "recoil";
import useSWR from 'swr'
import Overlay from './Overlay';
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [token,] = useRecoilState(tokenId);
  const [sidebar, setSidebar] = useRecoilState(sidebarStatus);
  const [visibility, setVisibility] = useState(false);

  const url = 'http://localhost:5000/tag';

  const { data, error } = useSWR(
    [url, token],
    fetcher
  );
  return (
    <Wrapper open={sidebar}>
      {sidebar ? (
        <>
          <Link href={`/`}>
            <LogoWrapper open={sidebar}>
              <LogoWhite />
              <span onClick={() => setSidebar(!sidebar)}>
                <Close />
              </span>
            </LogoWrapper>
          </Link>
          {data?.tags?.length >= 1 && data?.tags?.map((item) => (
            <Link href={`/${item?.tag}`}>
              <>
                {item?.tag !== "" && (
                  <Flex>
                    <Item onMouseOver={() => setVisibility(!visibility)} onMouseOut={() => setVisibility(true)}>{item?.tag}
                      <Overlay tag={item?.tag}>{item?.tag}</Overlay>
                    </Item>
                  </Flex>
                )}
              </>
            </Link>
          ))}
        </>
      ) : (
        <LogoWrapper onClick={() => setSidebar(!sidebar)}><Menu /></LogoWrapper>
      )
      }
    </Wrapper >
  );
};

const Wrapper = styled.div`
  background: linear-gradient(122deg, rgb(86, 73, 207), rgb(11, 25, 99));
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  width: ${props => props.open ? "320px" : "auto"};
  padding: ${props => props.open ? "30px 0px 30px 20px" : "20px 30px"};
  position: sticky;
  top: 0;
  ::-webkit-scrollbar {
    display: none;
}
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
  margin-bottom: 40px;
  padding-right: ${props => props.open ? "20px" : "0px"};
`;

const Item = styled.div`
  font-size: 0.9em;
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  margin-bottom: 20px;
  cursor: pointer;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  > div {
    display: none;
  }
  &:hover {
    div {
      display: block !important;
    }
  } 
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Sidebar;
