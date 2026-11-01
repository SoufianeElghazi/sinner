import React, { lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Deferred from "../Deferred";
const Home2 = lazy(() => import("./Home2"));
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="Hello">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M 
                <strong className="main-name"> ELGHAZI Soufiane</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left"  }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Illustration of a data engineer at work"
                width="787" height="572" decoding="async" fetchPriority="high"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Deferred label="Professional background"><Suspense fallback={null}><Home2 /></Suspense></Deferred>
    </section>
  );
}

export default Home;
