import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
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
    {slugs.map((slug) => {
      return (
        <div className={utilStyles.headingMd} key={slug}>
          <Link href={slug}>
            <a>{slug} </a>
          </Link>
        </div>
      );
    })}
  </div>
);

export const getStaticProps = async() => {
  const files = fs.readdirSync("posts");
  const jobPostingData = fs
  .readFileSync(path.join("posts", slug + ".json"))
  .toString();
  //open each file
  // parse the json
  // filter
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default Home;
