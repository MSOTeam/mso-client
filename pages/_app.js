// import App from 'next/app'
import Layout from '../components/Layout'

function TagitApp({ Component, pageProps }) {

  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
  );
}

export default TagitApp