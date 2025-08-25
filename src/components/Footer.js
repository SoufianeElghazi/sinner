import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/* <p style={{ color: "white" }}>Copyright © {year} soufianeELGHAZI</p> */}
        </Col>
        <Col md="4" className="footer-copywright" style={{ alignContent: "center"}}>
          <p style={{ color: "white" }}> © {year} <span className="ms-2 me-2">•</span> soufiane ELGHAZI <span className="ms-2 me-2">—</span> All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
