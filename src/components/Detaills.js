import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn,FaMedium  } from "react-icons/fa";
import { SiUpwork,SiFiverr,SiBuymeacoffee,SiFreelancer,SiLeetcode, SiMicrosoftoutlook, SiGmail,SiReddit,SiX,SiInstagram,SiWhatsapp,SiYoutube,SiIndeed } from "react-icons/si";
import "./detaills.css"; 

const Detaills = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND <span className="purple">ME ON</span></h1>
          <p>Feel free to <span className="purple">connect</span> with me</p>
          <div className="overflow-hidden">
            <div className="scroll-container">
                <ul className="home-about-social-links animate-scroll">
                    <li className="social-icons">
                        <a
                        href="https://github.com/SoufianeElghazi"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.linkedin.com/in/soufiane-el-ghazi/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://leetcode.com/u/Soufiane-EL/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <SiLeetcode />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="mailto:soufiane.el-ghazi@outlook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <SiMicrosoftoutlook />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="mailto:elghazisoufiane02@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <SiGmail />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.instagram.com/elghazi_soufiane/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiInstagram />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://x.com/elghazisoufian5"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiX />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://wa.me/212653361122"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiWhatsapp />
                        </a>
                    </li>                           
                    <li className="social-icons">
                        <a
                        href="https://www.reddit.com/user/el-soufiane/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiReddit />
                        </a>
                    </li>                      
                    <li className="social-icons">
                        <a
                        href="https://profile.indeed.com/p/soufianee-w9t904c"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiIndeed />
                        </a>
                    </li>                   
                    <li className="social-icons">
                        <a
                        href="https://www.youtube.com/@Elghazi.Soufiane"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiYoutube />
                        </a>
                    </li>              
                    <li className="social-icons">
                        <a
                        href="https://www.freelancer.ma/profil/83934-data-scientist-data-engineer-software-mobile-dev-enthousiaste"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiFreelancer />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.upwork.com/freelancers/~0100d2ba5e7b412fa5?mp_source=share"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiUpwork />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://fr.fiverr.com/el_soufiane"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiFiverr />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://medium.com/@elghazisoufiane02"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <FaMedium />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://buymeacoffee.com/soufiane02"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiBuymeacoffee />
                        </a>
                    </li>

                    {/* Duplication */}
                    <li className="social-icons">
                        <a
                        href="https://github.com/SoufianeElghazi"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.linkedin.com/in/soufiane-el-ghazi/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://leetcode.com/u/Soufiane-EL/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <SiLeetcode />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="mailto:soufiane.el-ghazi@outlook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <SiMicrosoftoutlook />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="mailto:elghazisoufiane02@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <SiGmail />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.instagram.com/elghazi_soufiane/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiInstagram />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://x.com/elghazisoufian5"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiX />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://wa.me/212653361122"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiWhatsapp />
                        </a>
                    </li>                           
                    <li className="social-icons">
                        <a
                        href="https://www.reddit.com/user/el-soufiane/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiReddit />
                        </a>
                    </li>                      
                    <li className="social-icons">
                        <a
                        href="https://profile.indeed.com/p/soufianee-w9t904c"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiIndeed />
                        </a>
                    </li>                   
                    <li className="social-icons">
                        <a
                        href="https://www.youtube.com/@Elghazi.Soufiane"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiYoutube />
                        </a>
                    </li>              
                    <li className="social-icons">
                        <a
                        href="https://www.freelancer.ma/profil/83934-data-scientist-data-engineer-software-mobile-dev-enthousiaste"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiFreelancer />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.upwork.com/freelancers/~0100d2ba5e7b412fa5?mp_source=share"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiUpwork />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://fr.fiverr.com/el_soufiane"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiFiverr />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://medium.com/@elghazisoufiane02"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <FaMedium />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://buymeacoffee.com/soufiane02"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <SiBuymeacoffee />
                        </a>
                    </li>


                </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Detaills;
