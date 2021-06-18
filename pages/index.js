import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Nav from "../components/nav";
import List from "../components/list";
import Pagination from "../components/pagination";
import fs from "fs";

const Home = ({results}) => (
  <div>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
    <List results={results}/>
    <Pagination />
  </div>
);

//need this
export const getStaticProps = async () => {
  const data = fs.readFileSync("data.json", "utf-8");
  const results = JSON.parse(data);
  return {
    props: {
      results
    },
  };
};

export default Home;
