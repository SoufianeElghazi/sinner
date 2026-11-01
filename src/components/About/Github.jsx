import React, { lazy, Suspense } from "react";
import { Row } from "react-bootstrap";
import Deferred from "../Deferred";

const Calendar = lazy(() => import("react-github-calendar").then(module => ({ default: module.GitHubCalendar })));
const theme = { light: ["#e8eef3", "#bdcfdf", "#8baac7", "#547ca5", "#293f59"] };

export default function Github() {
  return (
    <Row className="github-section" style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Github</strong> Calendar
      </h2>
      <Deferred label="GitHub contributions" minHeight={180}>
        <Suspense fallback={<p role="status">Loading contributions…</p>}>
          <Calendar username="SoufianeElghazi" blockSize={15} blockMargin={5}
            colorScheme="light" theme={theme} fontSize={16}
            errorMessage="Contributions are temporarily unavailable. You can still visit my GitHub profile."
          />
        </Suspense>
      </Deferred>
      <a href="https://github.com/SoufianeElghazi" target="_blank" rel="noopener noreferrer">View GitHub profile</a>
    </Row>
  );
}
