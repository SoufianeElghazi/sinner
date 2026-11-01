import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="other_color">ELGHAZI Soufiane</span>, a passionate 
            <span className="other_color"> Senior Data Engineer and Power Bi Specialist </span> with a strong drive for innovation and problem-solving. 
            I graduated from the <span className="other_color">School of Information Science (ESI)</span> in Rabat.
            <br /><br />
            Originally from <span className="other_color"> Ouarzazate, Morocco</span>, I am deeply committed to continuous learning and professional growth. 
            My journey has equipped me with a solid foundation in <b className="other_color">Data Science, Data Analytics, and Engineering</b>, 
            where I blend analytical rigor with cutting-edge technologies to deliver impactful solutions.
            <br /><br />
            Beyond coding, I enjoy engaging in strategic and athletic activities such as  
            <span className="other_color"> Playing Chess</span>, <span className="other_color"> Basketball</span>, and <span className="other_color"> Tennis</span>, 
            which help me maintain a balanced and dynamic lifestyle.
            <br /><br />
            I am always eager to collaborate on exciting projects and contribute my expertise to meaningful endeavors. Let's build something great together!
        </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
