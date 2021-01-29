import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Nav from "../components/nav";
import List from "../components/list";
import Pagination from "../components/pagination";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import fs from "fs";

const Home = ({results}) => (
  <div>
    <Nav />
    <br />
    <br />
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <br />
    </Layout>
    <List results={results}/>

    <Pagination />
  </div>
);

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
