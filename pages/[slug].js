import React from "react";
import Head from "next/head";

const Post = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.job_title}</title>
        <meta title="description" content={data.description} />
      </Head>
    </>
  );
};

export const getServerSideProps = async () => {
  const url = "http://dry-caverns-07321.herokuapp.com/jobs";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "jobs/json",
    },
  });
  const data = await response.json();
  console.log(data, "data from /jobs")
  return {
    props: {
      data,
    },
  };
};

export default Post;
