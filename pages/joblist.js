import React from "react";
const results = require("../data.json");
import Job from "../components/Job";
import Pagination from "../components/pagination";
import Layout from "../components/layout";

function joblist() {
  return (
    <Layout home>
      <div className="grid grid-cols-4">
        {results.map((result) => {
          return <Job result={result}></Job>;
        })}
      </div>
      <Pagination />
    </Layout>
  );
}

export default joblist;
