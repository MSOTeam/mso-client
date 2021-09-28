import { Close, Logo, Menu } from "../util/icon";
import { sidebarStatus, tokenId } from "../util/state";
import { useEffect, useState } from "react";

import Actions from "./Actions";
import Head from "next/head";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [, setToken] = useRecoilState(tokenId);
  const [sidebar] = useRecoilState(sidebarStatus);
  console.log(sidebar);
  const router = useRouter();
  useEffect(() => {
    setToken(localStorage?.getItem("token"));
  }, []);
  return (
    <>
      <Head>
        <title>tagit</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <Sidebar />
        <Flex dir={true}>
          <Actions />
          <Grid>{children}</Grid>
          {router.query.category === "archive" && (
            <Delete open={sidebar}>Permanently delete all items</Delete>
          )}
        </Flex>
      </Flex>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.dir ? "column" : "row")};
  width: 100%;
  box-sizing: content-box;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  grid-row-gap: 30px;
  padding: 30px;
  transition: all 0.3s;
`;

const Delete = styled.div`
  font-size: 1em;
  font-weight: 300;
  letter-spacing: 3px;
  cursor: pointer;
  position: absolute;
  left: 0;
  z-index: 1;
  width: ${(props) =>
    props.open ? "calc(100% - 271px)" : "calc(100% - 81px)"};
  margin-left: ${(props) => (props.open ? "271px" : "81px")};

  display: flex;
  justify-content: center;
  height: 80px;
  background: black;
  color: white;
  bottom: 0px;
  align-items: center;
`;

export default Layout;
