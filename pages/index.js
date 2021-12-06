import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

const Home = () => (
  <div>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  </div>
);

export default Home;
