import React from "react";
import Joblist from "../components/Joblist";
const jobs = require("../data.json");

function joblist() {
  return (
    <div>
      <Joblist result />
    {jobs.map((job) => {
        return (
            <div key={job.job_title}> {job.job_title} </div>
        )
    })}
    </div>
  );
}

export default joblist;
