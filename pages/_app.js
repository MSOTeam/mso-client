import GlobalStyle from "../util/globalStyles";
import Landing from "../components/Landing";
// import App from 'next/app'
import Layout from "../components/Layout";
import { RecoilRoot } from "recoil";
import { useState } from "react";
function TagitApp({ Component, pageProps }) {
  const [token, setToken] = useState(false);

  return token ? (
    <RecoilRoot>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  ) : (
    <>
      <GlobalStyle />
      <Landing />
    </>
  );
}

export default TagitApp;
