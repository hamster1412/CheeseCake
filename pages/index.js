import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Nav from "../components/nav";
import List from "../components/list";
import Pagination from "../components/pagination";
// import utilStyles from "../styles/utils.module.css";
// import Link from "next/link";
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
      {/* <Filterbox/> */}
      <br />
    </Layout>
    <List />
    {/* articles */}
    {/*{slugs.map((slug) => {
      return (
        <div className={utilStyles.center} key={slug}>
          <Link href={slug}>
            <a> {slug} </a>
          </Link>
        </div>
      );
    })} */}

    <Pagination />
  </div>
);

export const getStaticProps = async () => {
  const data = fs.readFileSync("data.json", "utf-8");
  const result = JSON.parse(data);
  console.log(result[0].job_title);
  return {
    props: {
      result,
    },
  };
};

export default Home;
