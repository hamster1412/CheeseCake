import React from "react";

function Joblist() {
  return (
      <div className="flex justify-evenly">
        {results.map((result) => {
          return <Job result={result}></Job>;
        })}
      <Pagination />
    </div>
  );
}

export default Joblist;
