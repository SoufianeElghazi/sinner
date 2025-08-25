import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  FaSnowflake,
} from "react-icons/fa";
import {
  SiGooglebigquery,
  
} from "react-icons/si";

function Datawarehouses() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaSnowflake />
        <p style={{fontSize: "14px"}}>Snowflake</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglebigquery />
        <p style={{fontSize: "14px"}}>BigQuery</p>
      </Col>
    </Row>
  );
}

export default Datawarehouses;
