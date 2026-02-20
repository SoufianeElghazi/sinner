import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import LeetCodeDashboard  from "./Leetcode";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Languages from "./Languages";
import Databases from "./Databases";
import Datawarehouses from "./Datawarehouses";
import SoftSkills from "./SoftSkills";
import Cloud from "./Cloud";
import Detaills from "../Detaills";
import Testimonials from "../Testimonials";


import introVideo from "../../Assets/intro.mp4"; 


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            About<strong className="purple"> Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <video
              width="100%"
              height="315"
              controls
              autoPlay
              style={{ borderRadius: "0px", border: "none" }}
            >
              <source src={introVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>

        <h1 className="project-heading">
         Programming<strong className="purple"> Languages </strong>
        </h1>
        <Languages />

        <h1 className="project-heading">
          <strong className="purple">Databases</strong>
        </h1>
        <Databases />

        <h1 className="project-heading">
          <strong className="purple">Datawarehouses </strong> & Datalakehouses
        </h1>
        <Datawarehouses />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />


        <h1 className="project-heading">
            Frameworks <strong className="purple">& Technologies </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Cloud</strong> Computing
        </h1>
        <Cloud />

        <h1 className="project-heading">
          <strong className="purple">Soft</strong> Skills
        </h1>
        <SoftSkills />
        <hr className="section-divider" />
        <LeetCodeDashboard  />
        <hr className="section-divider" />
        <Github />
        <hr className="section-divider" />
        <Testimonials/>
        <hr className="section-divider" />
        <Detaills/>
      </Container>
            
    </Container>
  );
}

export default About;
