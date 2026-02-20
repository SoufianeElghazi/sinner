import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiMicrosoftazure ,SiGooglecloud,
} from "react-icons/si";

function Cloud() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <p style={{fontSize: "14px"}}>Microsoft Azure</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <p style={{fontSize: "14px"}}>Google Cloud</p>
      </Col>
    </Row>
  );
}

export default Cloud;
