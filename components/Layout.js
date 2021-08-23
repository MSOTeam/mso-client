import Head from "next/head";
import Sidebar from '../components/Sidebar'
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  grid-row-gap: 30px;
  margin: 30px;
  transition: all 0.3s;
  width: 100%;
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
        <Grid>
          {children}
        </Grid>
      </Flex>

    </>
  );
};

export default Layout;
