import React from "react";
let num = 0;

export default function Job({ result }) {
  num = num += 1;
  let url = "https://picsum.photos/100/100?random=";
  return (
    <div key={result.id} className="p-4 m-4 border-2 max-h-full cursor-pointer">
      <img src={url + num} />
      <h3 className="pt-2">{result.title}</h3>
      <p>${result.salary}</p>
      <p>{result.address}</p>
      <div className="min-h-40 max-h-40">
        <p className="overflow-ellipsis overflow-hidden truncate cursor-pointer">
          {result.description}
        </p>
      </div>
    </div>
  );
}
