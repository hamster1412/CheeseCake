import React from "react";
import fs from "fs";
import Head from "next/head";

const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

export const getStaticProps = async () => {
  const data = fs.readFileSync('data.json').toString();
  return {
    props: {
      htmlString,
      data,
    },
  };
};
export default Post;
