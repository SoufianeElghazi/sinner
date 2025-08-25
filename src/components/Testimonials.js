import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import {SiFiverr} from "react-icons/si";
import "../style.css"; 

const testimonialsData = [
    {
        id: 1,
        name: "adnanbenma",
        country: "MA",
        testimonial: "Awesome job on my project. Clear results and fast delivery Thanks a lot soufiane, you're the best!",
        link: "https://fr.fiverr.com/el_soufiane",
        duration: "1 day",
        stars: 4.5,
      },
      {
        id: 2,
        name: "mohamedmohemdlm",
        country: "CA",
        testimonial: "I worked with Soufiane on a project and I am extremely satisfied with the result. He demonstrated great professionalism, understood my needs well, and delivered the project on time. Communication was smooth, and he was responsive to all my requests. I highly recommend Soufiane to anyone looking for a reliable and skilled developer! Thanks again for your excellent work!",
        link: "https://fr.fiverr.com/el_soufiane",
        duration: "3 days",
        stars: 5,
      },
      {
        id: 3,
        name: "gabrielalem",
        country: "CA",
        testimonial: "Excellent Travail!!! Mr.El-Soufiane a accepter de modifier et réviser plusieurs fois le travail. Je vous conseil de travailler avec lui pour tout ce qui touche python.",
        link: "https://fr.fiverr.com/el_soufiane",
        duration: "4 days",
        stars: 5,
      },
      {
        id: 4,
        name: "ghz297",
        country: "GB",
        testimonial: "Good quality work.",
        link: "https://fr.fiverr.com/el_soufiane",
        duration: "11 days",
        stars: 5,
      },
];

function Testimonials() {
    return (
      <div className="testimonials-section">
        <h1 className="white">Clients <span className="purple">Testimonials</span></h1>
        <p className="white">What my clients <span className="purple">say</span></p>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {testimonialsData.map((testimonial) => (
            <Col xs={12} md={6} lg={4} key={testimonial.id} className="testimonial-card-col">
              <div
                className="testimonial-card"
                onClick={() => window.open(testimonial.link, "_blank")}
              >
                {/* Fiverr icon in the top-right corner */}
                <div className="fiverr-icon-container">
                    <SiFiverr className="fiverr-icon" />
                </div>
                <div className="testimonial-header">
                  <ReactCountryFlag
                    countryCode={testimonial.country}
                    svg
                    style={{ width: "30px", height: "30px", marginRight: "10px" }}
                  />
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-duration">{testimonial.duration}</p>
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.testimonial}"</p>
                <div className="testimonial-footer">
                  <div className="star-rating">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`star ${index < testimonial.stars ? "filled" : ""}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
  
  export default Testimonials;