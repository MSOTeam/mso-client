import Head from "next/head";
import Sidebar from '../components/Sidebar'
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
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
        <Grid>
          <Sidebar />
          {children}
        </Grid>

    </>
  );
};

export default Layout;
