import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SiCoursera, SiIbm, SiMicrosoftazure } from "react-icons/si";
function CertificationCard(props) {
  const skills = props.skills || [];


  return (
    <Card className="certification-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        {/* Skills Section */}
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>

        <Button variant="primary" href={props.link} target="_blank">
          View Certification
        </Button>

        {/* New Button for Company Icon */}
        <Button 
          variant="primary" 
          className="company-button"
          href={props.companyLink}
          target="_blank" 
          style={{ borderRadius: "50%", marginLeft: "10px" }} // Circular button
        >
          {props.company === "Coursera" && <SiCoursera className="company-icon"  />} 
          {props.company === "IBM" && <SiIbm className="company-icon"  />}
          {props.company === "Azure" && <SiMicrosoftazure className="company-icon"  />}
        </Button>


      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
