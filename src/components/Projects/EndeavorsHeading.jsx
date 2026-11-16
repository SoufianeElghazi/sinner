import React from "react";

export default function EndeavorsHeading({ id, as: Heading = "h2", lead, accent, eyebrow, children }) {
  return (
    <header className="endeavors-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading id={id}>{lead ? `${lead} ` : ""}<span>{accent}</span></Heading>
      {children && <p>{children}</p>}
    </header>
  );
}
