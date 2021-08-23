// import App from 'next/app'
import Layout from '../components/Layout'
import GlobalStyle from '../util/globalStyles'
import {
  RecoilRoot
} from "recoil";


function TagitApp({ Component, pageProps }) {

  return (
    <RecoilRoot>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default TagitApp