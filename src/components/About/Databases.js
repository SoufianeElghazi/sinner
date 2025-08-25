import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiMongodb,
  DiPostgresql,
  DiMsqlServer
} from "react-icons/di";
import {
  SiApachecassandra
} from "react-icons/si";

function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize: "14px"}}>MongDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <p style={{fontSize: "14px"}}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachecassandra />
        <p style={{fontSize: "14px"}}>Cassandra</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
        <p style={{fontSize: "14px"}}>Sql Server</p>
      </Col>
    </Row>
  );
}

export default Databases;
