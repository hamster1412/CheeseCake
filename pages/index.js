import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Nav from "../components/nav";
import List from "../components/list";
import Pagination from "../components/pagination";
import fs from "fs";

const Home = () => (
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
    <List />
 <Pagination />
  </div>
);

export const getStaticProps = async () => {
  const data = fs.readFileSync("data.json", "utf-8");
  const result = JSON.parse(data);
  console.log(result[0].job_title);
};

export default Home;
