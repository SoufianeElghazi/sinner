import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiPython,
  DiJava,
  DiScala
} from "react-icons/di";

function Languages() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize: "14px"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons sql-icon">
        <span>SQL</span>
        <p style={{fontSize: "14px"}}>SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize: "14px"}}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{fontSize: "14px"}}>Java</p>
      </Col>    
      <Col xs={4} md={2} className="tech-icons sql-icon">
        <DiScala />
        <p style={{fontSize: "14px"}}>Scala</p>
      </Col>
    </Row>
  );
}

export default Languages;
