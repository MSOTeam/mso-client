import { Close, LogoWhite, Menu } from "../util/icon";
import { useCallback, useMemo, useState } from "react";

import Link from "next/link";
import Overlay from "./Overlay";
import { sidebarStatus } from "../util/state";
import styled from "styled-components";
import { useRecoilState } from "recoil";

const Sidebar = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarStatus);
  const [visibility, setVisibility] = useState(false);
  const [data, dataSet] = useState(null);

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch("api/articles/");
    response = await response.json();
    let res = response?.map((item) => {
      return item?.tags;
    });
    const arr = res?.flat();
    const uniq = [...new Set(arr)];
    dataSet(uniq);
  }, []);

  useMemo(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);

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
          {data?.length > 0 &&
            data?.map((item) => (
              <>
                {item?.tag !== "" && (
                  <Flex>
                    <Item
                      onMouseOver={() => setVisibility(!visibility)}
                      onMouseOut={() => setVisibility(true)}
                    >
                      <Link href={`/${item}`}>
                        <span>{item}</span>
                      </Link>
                      <Overlay tag={item}>{item}</Overlay>
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
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
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
