import React from "react";
import EndeavorsHeading from "./EndeavorsHeading";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import course1 from "../../Assets/optimized/CoursesArticles/course1.webp";
import course2 from "../../Assets/optimized/CoursesArticles/course2.webp";
import course3 from "../../Assets/optimized/CoursesArticles/course3.webp";
import course4 from "../../Assets/optimized/CoursesArticles/course4.webp";
import course5 from "../../Assets/optimized/CoursesArticles/course5.webp";

import { SiUdemy } from "react-icons/si";


const coursesData = [
  {
    id: 1,
    title: "Power BI Masterclass: From Beginner to PL-300 Certified!",
    description: "Master Power BI, DAX, Data Modeling, and Visualization to become a Certified Microsoft Power BI Data Analyst (PL-300)!",
    image: course1,
    promoCode: "F4AD3AA808E47F3FA66E",
    link: "https://www.udemy.com/course/power-bi-masterclass-from-beginner-to-pl-300-certified/?referralCode=F4AD3AA808E47F3FA66E&couponCode=LETSLEARNNOW",
  },
  {
    id: 2,
    title: "The Complete Beginner’s Guide to Version Control",
    description: "Master Git from scratch! Learn version control, branching, merging, and GitHub collaboration with hands-on practice",
    image: course2,
    promoCode: "61A2732C9C6979472D6E",
    link: "https://www.udemy.com/course/learn-git-the-complete-beginners-guide-to-version-control/?referralCode=61A2732C9C6979472D6E&couponCode=LETSLEARNNOW",
  },
  {
    id: 3,
    title: "SQL Window Functions Through Business Problems",
    description: "Learn SQL window functions by solving business problems.",
    image: course3,
    promoCode: "94FC774530D9091EAF57",
    link: "https://www.udemy.com/course/sql-window-functions-through-business-problems/?referralCode=94FC774530D9091EAF57",
  },
  {
    id: 4,
    title: "SQL Joins Explained: Solve Real Business Data Problems",
    description: "Learn SQL joins by solving real business data problems.",
    image: course4,
    promoCode: "7B633A54B4523BF1A8B5",
    link: "https://www.udemy.com/course/draft/7454331/?referralCode=7B633A54B4523BF1A8B5",
  },
  {
    id: 5,
    title: "SQL CTEs & Subqueries: Write Clear, Maintainable Queries",
    description: "Break complex SQL queries into steps using common table expressions and subqueries.",
    image: course5,
    promoCode: "56E89B2651E6B972A791",
    link: "https://www.udemy.com/course/draft/7458045/?referralCode=56E89B2651E6B972A791",
  },
];

function BlogsCourses() {
  return (
    <Container as="section" className="blogs-courses-section">
      <EndeavorsHeading lead="My" accent="Courses">
        Courses available on Udemy.
      </EndeavorsHeading>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {coursesData.map((course) => (
          <Col md={4} className="course-card" id={`course-${course.id}`} key={course.id} style={{ scrollMarginTop: "100px" }}>
            <Card className="course-card-view">
              <Card.Img loading="lazy" decoding="async" variant="top" src={course.image} alt={course.title} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{course.title}</Card.Title>
                <Card.Text className="flex-grow-1">{course.description}</Card.Text>
                {course.promoCode && (
                  <p className="course-promo">
                    <strong>Coupon:</strong> {course.promoCode}
                  </p>
                )}
                {course.status && <span className="skill-badge">{course.status}</span>}
                {course.link && (
                  <Button variant="primary" href={course.link} target="_blank" rel="noopener noreferrer">
                    <SiUdemy aria-hidden="true" /> &nbsp;Purchase Now
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BlogsCourses;
