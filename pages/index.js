import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Filterbox from "../components/filter-box";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import fs from "fs";

const Home = ({ slugs }) => (
  <div>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
    <Filterbox/>
    {slugs.map((slug) => {
      return (
        <div className={utilStyles.center} key={slug}>
          <h1>hehe</h1>
          <Link href={slug}>
            <a> {slug} </a>
          </Link>
        </div>
      );
    })}
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default Home;
