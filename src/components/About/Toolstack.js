import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit, DiDocker } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiApacheairflow,
  SiApachekafka,
  SiTalend,
  SiPowerbi,
  SiDbt
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{fontSize: "14px"}}>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize: "14px"}}>VSCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <p style={{fontSize: "14px"}}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTalend />
        <p style={{fontSize: "14px"}}>Talend</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
        <p style={{fontSize: "14px"}}>Airflow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <p style={{fontSize: "14px"}}>Kafka</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize: "14px"}}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p style={{fontSize: "14px"}}>Power Bi</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDbt />
        <p style={{fontSize: "14px"}}>DBT</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
