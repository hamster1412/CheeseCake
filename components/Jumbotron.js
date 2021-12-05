import React from "react";
import Image from "next/image";
const name = "Interntrip";

function Jumbotron() {
  return (
    <div>
      <Image
        src="/images/thislogo.jpg"
        className={}
        width={200}
        height={200}
        alt={name}
      />
      <p>
        As a company of seasoned travelers, we’ve experienced first hand what a
        stressful and difficult experience it is to find reliable information
        about programs abroad. Our mission is to give you the knowledge and
        confidence to choose the right program for your next adventure
      </p>
    </div>
  );
}

export default Jumbotron;
