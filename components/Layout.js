import { Close, Logo, Menu } from "../util/icon";
import { useEffect, useState } from 'react';

import Actions from './Actions'
import Head from "next/head";
import Sidebar from './Sidebar'
import styled from "styled-components";
import { tokenId } from "../util/state";
import { useRecoilState } from "recoil";

const Layout = ({ children }) => {
  const [token, setToken] = useRecoilState(tokenId);

  useEffect(() => {
    setToken(localStorage?.getItem("token"));
  }, []);
  return (
    <>
      <Head>
        <title>
          tagit
        </title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <Sidebar />
        <Flex dir={true}>
        <Actions/>
        <Grid>
          {children}
        </Grid>
        </Flex>
      </Flex>

    </>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.dir ? "column" : "row"};
  width: 100%;
  box-sizing: content-box;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  grid-row-gap: 30px;
  padding: 30px;
  transition: all 0.3s;
`

export default Layout;
