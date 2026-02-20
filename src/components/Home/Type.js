import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Data Engineer",
          "×4 Microsoft Azure Certified",
          "Senior Data Analyst",
          "Power BI Specialist",
          "Big Data Enthusiast",
          "Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
