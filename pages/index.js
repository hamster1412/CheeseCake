import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Navbar from "../components/Navbar";
import List from "../components/Joblist";
import Pagination from "../components/pagination";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import fs from "fs";

const Home = ({results}) => (
  <div>
    <Navbar />
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <br />
    </Layout>
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
