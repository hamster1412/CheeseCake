import React from "react";

export default function getJobs({data}) {
  const getJobs = async () => {
    const url = "http://dry-caverns-07321.herokuapp.com/jobs";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "jobs/json",
      },
    });
    const data = await response.json();
    console.log(data, "data from /jobs")
  };
  return <div>{data}</div>;
}
