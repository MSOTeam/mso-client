import { Close, Logo, Menu } from "../util/icon";

import Actions from './Actions'
import Head from "next/head";
import Sidebar from './Sidebar'
import styled from "styled-components";

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

const Layout = ({ children }) => {
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

export default Layout;
