import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { FaJava,FaSuitcase,FaLocationArrow, FaCalendarAlt , FaMapMarkerAlt, FaGraduationCap  } from "react-icons/fa";
import { SiSelenium,SiMicrosoftazure,SiMicrosoftsqlserver,SiOpencv,SiReact,SiYolo,SiDbt,SiCsharp,SiMysql,SiPython, SiPostgresql,SiStreamlit, SiPowerbi,SiTalend, SiApachekafka, SiApachespark, SiApacheairflow, SiDjango, SiRedis } from "react-icons/si";
import LeetCodeDashboard  from "../About/Leetcode";
import Github from "../About/Github";
import Detaills from "../Detaills";
import Testimonials from "../Testimonials";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Professional<span className="purple"> Summary </span>
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
                As a passionate Senior Data Engineer and Power BI Specialist, ×4 Microsoft Azure Certified, 
                I specialize in transforming raw data into actionable insights and building scalable data solutions. 
                With expertise in  
                <i>
                    <b className="other_color"> Python</b> and <b className="other_color">SQL </b>, 
                </i>  
                I design and optimize robust <b className="other_color">ETL pipelines</b> and architect efficient <b className="other_color">data workflows</b> to empower businesses with data-driven decision-making.
                <br /><br />
                My skill set includes developing and deploying advanced 
                <i>
                    <b className="other_color"> Machine Learning </b> and <b className="other_color">AI </b> models,  
                </i>  
                automating data engineering tasks with 
                <b className="other_color"> Kafka </b>, <b className="other_color">Spark</b>, and <b className="other_color"> Airflow</b>, 
                and integrating cutting-edge  
                <b className="other_color">Large Language Models (LLMs)</b> into intelligent data solutions.
                <br /><br />
                Beyond data, I am proficient in modern development frameworks like  
                <b className="other_color"> Node.js</b>,<b className="other_color"> FastApi</b> <b className="other_color"> React</b> and <b className="other_color">Flutter</b>,  
                allowing me to build seamless and scalable applications that bridge technology and analytics.
                <br /><br />
                My mission is to drive innovation through data, continuously refine my expertise, and contribute to impactful projects in  
                <i>
                    <b className="other_color">Data engineering </b> and <b className="other_color">analysis</b>.
                </i>
            </p>

          </Col>
          <Col md={4} className="myAvtar">
          
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <hr className="section-divider" />
        <Row>
          <Col md={12}>
            <h1 className="purple">Experience</h1>
            <div className="timeline">

              {/* experience - 1 */}
              <div className="container-timeline right">
                <div className="content">
                  <h5 style={{color:"white"}}>
                  <FaSuitcase className="icon" />
                    Accenture • CDI • Hybrid</h5>
                  <p style={{color:"#fca5a5"}}>Data Engineer</p>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                    <FaCalendarAlt className="icon" />
                    Dec 2025 – Present
                    </div>
                    <div>
                    <FaLocationArrow className="icon" />
                    Rabat
                    </div>                                    
                  </div>
                  <p>
                  <b className="purple">Data Engineer at Btechnologie Center, Exclusive Partner of Bouygues Telecom</b><br />
                  Design and optimize ETL pipelines with Microsoft Fabric (Lakehouse, Dataflows Gen2, Pipelines). 
                  Build Power BI reports (Direct Lake, optimized DAX). 
                  Enhance data workflows using PySpark & SQL. 
                  Contribute to AI projects for communication failure prediction and develop Selenium automation bots.</p>
                  <div className="technologies">
                    <span className="technology-badge"><SiMicrosoftazure /></span>
                    <span className="technology-badge"><SiPython /></span>
                    <span className="technology-badge"><SiApachespark /></span>
                    <span className="technology-badge"><SiPowerbi /></span>
                    <span className="technology-badge"><SiSelenium /></span>
                  </div>
                </div>
              </div>

              {/* experience - 2 */}
              <div className="container-timeline left">
              <div className="content">
                  <h5 style={{color:"white"}}>
                  <FaSuitcase className="icon" />
                    ENOVA RT • CDI • Hybrid</h5>
                  <p style={{color:"#fca5a5"}}>Data Engineer | Power BI Specialist</p>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                    <FaCalendarAlt className="icon" />
                    Sep 2024 – Jan 2026
                    </div>
                    <div>
                    <FaLocationArrow className="icon" />
                    Rabat
                    </div>                                    
                  </div>
                  <p>
                  <b className="purple">Dynamic Dashboard Design and Deployment</b><br />
                    Utilized predictive analytics with machine learning to enhance decision-making speed,
                     and developed ETL and automation processes for analysis</p>
                  <div className="technologies">
                    <span className="technology-badge"><SiPython />   </span>
                    <span className="technology-badge"><SiPostgresql />  </span>
                    <span className="technology-badge"><SiPowerbi />  </span>
                    <span className="technology-badge"><SiTalend />  </span>
                    <span className="technology-badge"><SiDbt />  </span>
                    <span className="technology-badge"><FaJava />  </span>
                    <span className="technology-badge"><SiMicrosoftsqlserver />  </span>
                  </div>
                </div>
              </div>

              {/* experience - 3 */}
              <div className="container-timeline right">
                <div className="content">
                  <h5 style={{color:"white"}}>
                  <FaSuitcase className="icon" />
                    FIVERR • Freelance • Remote</h5>
                  <p style={{color:"#fca5a5"}}>Computer Vision & AI Engineer</p>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                    <FaCalendarAlt className="icon" />
                    May 2024 – Sep 2024
                    </div>
                    <div>
                    <FaLocationArrow className="icon" />
                    Paris
                    </div>                                    
                  </div>
                  <p>
                  <b className="purple">Card Detection and Extraction</b><br />
                  Developed a verification feature for a mobile application using Flutter, OCR for text
                  extraction and OpenCV for image enhancement, focused on national ID card (CIN)
                  validation during user login</p>
                  <div className="technologies">
                    <span className="technology-badge"><SiPython />   </span>
                    <span className="technology-badge"><SiOpencv />  </span>
                    <span className="technology-badge"><SiYolo />  </span>
                    <span className="technology-badge"><SiReact />  </span>
                  </div>
                </div>
              </div>

              {/* experience - 4 */}
              <div className="container-timeline left">
                <div className="content">
                  <h5 style={{color:"white"}}>
                  <FaSuitcase className="icon" />
                     ENOVA RT • Internship • On-Site</h5>
                  <p style={{color:"#fca5a5"}}>Data Engineering Graduation Project Intern</p>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                    <FaCalendarAlt className="icon" />
                    Feb 2024 – Aug 2024
                    </div>
                    <div>
                    <FaLocationArrow className="icon" />
                    Rabat
                    </div>
                  </div>
              
                  <p>
                  <b className="purple">Predictive Modeling of Nosocomial Infections</b><br />
                   An AI approach for prevention and healthcare improvement
                  </p>
                  <div className="technologies">
                    <span className="technology-badge"><SiPython />   </span>
                    <span className="technology-badge"><SiPostgresql />  </span>
                    <span className="technology-badge"><SiPowerbi />  </span>
                    <span className="technology-badge"><SiApachekafka />  </span>
                    <span className="technology-badge"><SiApachespark />  </span>
                    <span className="technology-badge"><SiApacheairflow />  </span>
                    <span className="technology-badge"><SiDjango />  </span>
                    <span className="technology-badge"><SiRedis />  </span>                   
                  </div>
                </div>
              </div>

              {/* experience - 5 */}
              <div className="container-timeline right">
                <div className="content">
                  <h5 style={{color:"white"}}>
                  <FaSuitcase className="icon" />
                    ENOVA RT • Internship • On-Site </h5>
                  <p style={{color:"#fca5a5"}}>Data Science Intern</p>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                    <FaCalendarAlt className="icon" />
                    Jul 2023 – Aug 2023
                    </div>
                    <div>
                    <FaLocationArrow className="icon" />
                    Rabat
                    </div>
                  </div>
                  <p>
                  <b className="purple">Machine Learning</b><br />
                  Predicting medical diagnoses using data from the ENOVA hospital information system.
                  </p>
                  <div className="technologies">
                    <span className="technology-badge"><SiPython />   </span>
                    <span className="technology-badge"><SiPostgresql />  </span>
                    <span className="technology-badge"><SiPowerbi />  </span>
                    <span className="technology-badge"><SiStreamlit />  </span>
                  </div>
                </div>
              </div>

              {/* experience - 6 */}
              <div className="container-timeline left">
                <div className="content">
                  <h5 style={{color:"white"}}>
                  <FaSuitcase className="icon" />
                   DSIS-HCP • Internship</h5>
                  <p style={{color:"#fca5a5"}}>Desktop Application Development Intern</p>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                    <FaCalendarAlt className="icon" />
                    Jul 2022 – Aug 2022
                    </div>
                    <div>
                    <FaLocationArrow className="icon" />
                    Rabat
                    </div>
                  </div>
                  <p>
                  <b className="purple">Desktop Application</b><br />
                   for Internship Management and Data Visualization
                  </p>
                  <div className="technologies">
                    <span className="technology-badge"><SiCsharp />   </span>
                    <span className="technology-badge"><SiMysql />  </span>               
                  </div>
                </div>
              </div>

            </div>
          </Col>
        </Row>
        <hr className="section-divider" />
        <Row>
          <Col md={12}>
            <h1 className="purple">Education</h1>
            <div className="education-timeline">      
              <div className="education-container">              
                  <div className="education-content">                 
                    <h5 style={{color:"white"}}>                   
                      Preparatory Classes</h5>
                    <p>
                    <FaGraduationCap className="purple" />
                    <span className="purple"> Ibn Tahir High School </span>                
                    </p>
                    <p>
                      <FaMapMarkerAlt className="icon" />
                      Errachidia
                    </p>
                    <p>
                      <FaCalendarAlt className="icon" />
                      September 2019 – June 2021
                    </p>
                  </div>
              </div>
              <div className="education-container">              
                <div className="education-content">
                  <h5 style={{color:"white"}}>
                    Data and Knowledge Engineering</h5>
                  <p>
                  <FaGraduationCap className="purple" />
                  <span className="purple"> School of Information Sciences [ESI] </span>
                  </p>
                  <p>
                    <FaMapMarkerAlt className="icon" />
                     Rabat
                  </p>
                  <p>
                    <FaCalendarAlt className="icon" />
                    October 2021 – June 2024
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="section-divider" />
        <Github />
        <hr className="section-divider" />
        <LeetCodeDashboard/>
        <hr className="section-divider" />
        <Testimonials/>
        <hr className="section-divider" />
        <Detaills/>
        
      </Container>
    </Container>
  );
}
export default Home2;
