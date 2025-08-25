import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        
        {/* Tools section */}
        <div className="tools-used">
          {props.tools && props.tools.map((tool, index) => (
            <img key={index} src={tool} alt="tool-badge" style={{ margin: '5px', height: '30px' }} />
          ))}
        </div>
        
        {props.title === "Green Future" ? (
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgWebsite /> &nbsp;
            {"Live"}
          </Button>
        ) : props.title === "POWERBI-POLICE-DEPARTMENT-INCIDENTS-PROJECT" || props.title === "REALTIME VOTING DATA ENGINEERING" ? (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        ) : (
          <>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {"GitHub"}
            </Button>
            {"\n"}
            {"\n"}

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
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
