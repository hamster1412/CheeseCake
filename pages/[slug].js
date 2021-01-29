import React from "react";
import fs from "fs";
import Head from "next/head";

const Post = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
    </>
  );
};

export const getStaticProps = async () => {
  const data = fs.readFileSync('data.json').toString();
  return {
    props: {
      data,
    },
  };
};
export default Post;
