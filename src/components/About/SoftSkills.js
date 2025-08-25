import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaLightbulb, FaComments, FaUsers, FaSyncAlt, FaEye, FaClock, FaBrain,FaBolt  } from "react-icons/fa";

function SoftSkills() {
  const skills = [
    { icon: <FaLightbulb />, title: "Problem-Solving" },
    { icon: <FaComments />, title: "Communication" },
    { icon: <FaUsers />, title: "Collaboration" },
    { icon: <FaSyncAlt />, title: "Adaptability" },
    { icon: <FaEye />, title: "Detail-Oriented" },
    { icon: <FaClock />, title: "Time Management" },
    { icon: <FaBrain />, title: "Critical Thinking" },
    { icon: <FaBolt />, title: "Fast Learner" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {skill.icon}
          <p style={{fontSize: "14px"}}>{skill.title}</p>
        </Col>
      ))}
    </Row>
  );
}

export default SoftSkills;
