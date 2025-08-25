import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

function LeetCodeDashboard() {
    const totalProblems = 3308;
    const solvedProblems = 101;
    const easyProblems = 47;
    const mediumProblems = 44;
    const hardProblems = 6;
    const submissions = 115;
    const acceptanceRate = (89.15).toFixed(2);
  
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          <strong style={{ color: '#fed7aa' }}>LeetCode</strong> Solved Problems 
        </h1>
        <Col
          md={6}
          className="leetcode"
          style={{ textAlign: "center", padding: "20px", borderRadius: "10px", position: "relative" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="circular-progress">
            <div className="progress-circle" >
              <div className="inner-circle">
                {isHovered ? (
                  <>
                    <div className="percentage">{acceptanceRate}%</div>
                    <div>Acceptance</div>
                    <span >{submissions} submissions</span>
                  </>
                ) : (
                  <>
                    <div className="percentage">{solvedProblems}/{totalProblems}</div>
                    <div>✓ Solved</div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-around" }}>
            <div style={{ color: "#86efac" }}>
              Easy <br /> {easyProblems}/{828}
            </div>
            <div style={{ color: "orange" }}>
              Med. <br /> {mediumProblems}/{1731}
            </div>
            <div style={{ color: "red" }}>
              Hard <br /> {hardProblems}/{749}
            </div>
          </div>
        </Col>
      </Row>
    );
  }
  
  export default LeetCodeDashboard;