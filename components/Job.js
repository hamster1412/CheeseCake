import React from "react";
import Image from "next/image";

export default function Job({ result }) {
  return (
    <div>
      <h3>{result.title}</h3>
      <p>${result.salary}</p>
      <p>{result.description}</p>
    </div>
  );
}
