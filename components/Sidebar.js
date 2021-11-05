import { Close, LogoWhite, Menu } from "../util/icon";
import { sidebarItemsStatus, sidebarStatus, tokenId } from "../util/state";
import { useEffect, useState } from "react";

import Link from "next/link";
import Overlay from "./Overlay";
import styled from "styled-components";
import { useRecoilState } from "recoil";

const Sidebar = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarStatus);
  const [visibility, setVisibility] = useState(false);
  const [sidebarItems] = useRecoilState(sidebarItemsStatus);


  return (
    <Wrapper open={sidebar}>
      {sidebar ? (
        <>
          <LogoWrapper open={sidebar}>
            <Link href={`/`}>
              <div>
                <LogoWhite />
              </div>
            </Link>
            <span onClick={() => setSidebar(!sidebar)}>
              <Close />
            </span>
          </LogoWrapper>
          {sidebarItems?.tags?.length >= 1 &&
            sidebarItems?.tags?.map((item) => (
              <>
                {item?.tag !== "" && (
                  <Flex>
                    <Item
                      onMouseOver={() => setVisibility(!visibility)}
                      onMouseOut={() => setVisibility(true)}
                    >
                      <Link href={`/${item?.tag}`}>
                        <span>{item?.tag}</span>
                      </Link>
                      <Overlay tag={item?.tag}>{item?.tag}</Overlay>
                    </Item>
                  </Flex>
                )}
              </>
            ))}
        </>
      ) : (
        <LogoWrapper closed={!sidebar} onClick={() => setSidebar(!sidebar)}>
          <Menu />
        </LogoWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(122deg, rgb(86, 73, 207), rgb(11, 25, 99));
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  width: ${(props) => (props.open ? "320px" : "auto")};
  padding: ${(props) => (props.open ? "30px 0px 30px 20px" : "0px 30px")};
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
  cursor: pointer;
  margin-bottom: 40px;
  padding-right: ${(props) => (props.open ? "20px" : "0px")};
  margin-top: ${(props) => (props.closed ? "38px" : "0px")};
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
