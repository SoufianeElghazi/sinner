import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Set isMounted to true when component mounts
    setIsMounted(true);

    return () => {
      // Set isMounted to false when component unmounts
      setIsMounted(false);
    };
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong style={{ color: '#fed7aa' }}>Github</strong> Calendar
      </h1>
      {isMounted && (
        <GitHubCalendar
          username="SoufianeElghazi"
          blockSize={15}
          blockMargin={5}
          color="#fdba74"
          fontSize={16}
        />
      )}
    </Row>
  );
}

export default Github;

