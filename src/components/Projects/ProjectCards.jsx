import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img loading="lazy" decoding="async" variant="top" src={props.imgPath} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        
        {/* Tools section */}
        <div className="tools-used">
          {props.tools && props.tools.map((tool, index) => (
            <img key={index} src={tool} alt="Technology used" loading="lazy" decoding="async" style={{ margin: '5px', height: '30px' }} />
          ))}
        </div>
        
        {props.title === "Green Future" ? (
          <Button variant="primary" href={props.demoLink} target="_blank" rel="noopener noreferrer">
            <CgWebsite /> &nbsp;
            {"Live"}
          </Button>
        ) : props.title === "POWERBI-POLICE-DEPARTMENT-INCIDENTS-PROJECT" || props.title === "REALTIME VOTING DATA ENGINEERING" ? (
          <Button variant="primary" href={props.ghLink} target="_blank" rel="noopener noreferrer">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        ) : (
          <>
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noopener noreferrer">
              <BsGithub /> &nbsp;
              {"GitHub"}
            </Button>
            {"\n"}
            {"\n"}

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank" rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
