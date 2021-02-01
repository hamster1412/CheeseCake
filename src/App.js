import React, { useEffect } from "react";

function App() {
  const getData = async () => {
    let url = "http://localhost:5000/";
    let response = await fetch(url);
    let data = await response.json();
    console.log("this is what we get: ", data);
  };

  useEffect(() => {
    getData();
  }, []);
  
  return <div>{data}</div>;
}

export default App;
