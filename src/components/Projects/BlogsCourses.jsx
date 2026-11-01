import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import course1 from "../../Assets/optimized/CoursesArticles/course1.webp";
import course2 from "../../Assets/optimized/CoursesArticles/course2.webp";

import { SiUdemy } from "react-icons/si";


const coursesData = [
  {
    id: 1,
    title: "Power BI Masterclass: From Beginner to PL-300 Certified!",
    description: "Master Power BI, DAX, Data Modeling, and Visualization to become a Certified Microsoft Power BI Data Analyst (PL-300)!",
    image: course1,
    price: "$64.99",
    promoCode: "F4AD3AA808E47F3FA66E",
    link: "https://www.udemy.com/course/power-bi-masterclass-from-beginner-to-pl-300-certified/?referralCode=F4AD3AA808E47F3FA66E&couponCode=LETSLEARNNOW",
  },
  {
    id: 2,
    title: "The Complete Beginner’s Guide to Version Control",
    description: "Master Git from scratch! Learn version control, branching, merging, and GitHub collaboration with hands-on practice",
    image: course2,
    price: "$34.99",
    promoCode: "61A2732C9C6979472D6E",
    link: "https://www.udemy.com/course/learn-git-the-complete-beginners-guide-to-version-control/?referralCode=61A2732C9C6979472D6E&couponCode=LETSLEARNNOW",
  },

];

function BlogsCourses() {
  return (
    <Container fluid className="blogs-courses-section">
      {/* Courses Section */}
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Courses</strong>
        </h1>
        <p style={{ color: "var(--ink)" }}>
          Here are some of my courses available on Udemy.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {coursesData.map((course) => (
            <Col md={4} className="course-card" key={course.id}>
              <Card className="course-card-view">
                <Card.Img loading="lazy" decoding="async" variant="top" src={course.image} alt={course.title} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <p className="course-price">
                    <strong>Price:</strong> {course.price}
                  </p>
                  <p className="course-promo">
                    <strong>Coupon:</strong> {course.promoCode}
                  </p>
                  <Button variant="primary" href={course.link} target="_blank" rel="noopener noreferrer">
                    <SiUdemy /> &nbsp;
                    {"Purchase Now"}
                    
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> 
    </Container>
  );
}

export default BlogsCourses;