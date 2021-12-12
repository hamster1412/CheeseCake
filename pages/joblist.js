import React from "react";
const results = require("../data.json");
import Job from "../components/Job";
import PaginatedItems from "../components/Pagination";
import Layout from "../components/layout";

function joblist() {
  return (
    <Layout home>
      <div className="grid grid-cols-3">
        {results.map((result) => {
          return <Job key={result.id} result={result}></Job>;
        })}
      </div>
      <PaginatedItems />
    </Layout>
  );
}

export default joblist;
