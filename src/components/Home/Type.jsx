import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const roles = [
  "Senior Data Engineer",
  "×4 Microsoft Azure Certified",
  "Senior Data Analyst",
  "Power BI Specialist",
  "Big Data Enthusiast",
];

export default function Type() {
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false);
  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!media) return;
    const update = () => setReducedMotion(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (reducedMotion) return <span className="purple">{roles[0]}</span>;
  return (
    <>
      <span className="visually-hidden">{roles.join(". ")}</span>
      <div aria-hidden="true">
        <Typewriter options={{ strings: roles, autoStart: true, loop: true, deleteSpeed: 50 }} />
      </div>
    </>
  );
}
