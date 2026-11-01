import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiDjango,
  DiHtml5,
} from "react-icons/di";
import {
  SiFlutter,
  SiApachehadoop,
  SiTailwindcss,
  SiApachespark,
  SiApachehive,
  SiFlask
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop />
        <p style={{fontSize: "14px"}}>Hadoop</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <p style={{fontSize: "14px"}}>Flutter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p style={{fontSize: "14px"}}>Tailwind css</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize: "14px"}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <p style={{fontSize: "14px"}}>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p style={{fontSize: "14px"}}>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize: "14px"}}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
        <p style={{fontSize: "14px"}}>Spark</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{fontSize: "14px"}}>Html</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehive />
        <p style={{fontSize: "14px"}}>Hive</p>
      </Col>
    </Row>
  );
}

export default Techstack;
