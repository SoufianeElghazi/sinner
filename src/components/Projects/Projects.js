import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogsCourses from "./BlogsCourses";
import Articles from "./Articles.js";
import CertificationCard from "./CertificationCard.js";
import Particle from "../Particle";
import virtualization_denodo from "../../Assets/Projects/7.png";
import voting_systeme from "../../Assets/Projects/9.png";
import churn_predict from "../../Assets/Projects/8.png";
import restaurant_site from "../../Assets/Projects/10.png";
import news_summary from "../../Assets/Projects/6.png";
import book_esi from "../../Assets/Projects/5.png";
import flutter_potato_mobile from "../../Assets/Projects/4.png";
import flutter_chat_gpt from "../../Assets/Projects/2.png";
import powerbi_department from "../../Assets/Projects/3.png";
import flutter_mobile_assistant from "../../Assets/Projects/1.png";
import greenfuture from "../../Assets/Projects/11.png";

import ibm_iavs from "../../Assets/Certifications/3.png";
import ibm_chatbot from "../../Assets/Certifications/2.png";
import tensorflow_localization from "../../Assets/Certifications/1.png";
import jira_start from "../../Assets/Certifications/4.png";
import fine_bert from "../../Assets/Certifications/5.png";

import tweet_emotion from "../../Assets/Certifications/6.png";
import exploratory_data from "../../Assets/Certifications/7.png";
import googleai_platform from "../../Assets/Certifications/8.png";
import dataiku_ml from "../../Assets/Certifications/9.png";

import az_900 from "../../Assets/Certifications/az-900.png";
import dp_900 from "../../Assets/Certifications/dp-900.png";
import pl_300 from "../../Assets/Certifications/pl-300.png";
import dp_700 from "../../Assets/Certifications/dp-700.png";

import image_generator_stack from "../../Assets/Projects/12.png";
import fraud_detection from "../../Assets/Projects/13.png";
import financial_extractor from "../../Assets/Projects/15.png";
import smart_agri from "../../Assets/Projects/14.png";

import LeetCodeDashboard  from "../About/Leetcode";
import Detaills from "../Detaills";
import Testimonials from "../Testimonials";


// Badges
const pythonBadge = "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54";
const sparkBadge = "https://img.shields.io/badge/Apache%20Spark-FDEE21?style=for-the-badge&logo=apachespark&logoColor=black";
const kafkaBadge = "https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka";
const flaskBadge = "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white";
const flutterBadge = "https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white";
const opencvBadge = "https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white";
const reactBadge = "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB";
const wordpressBadge = "https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white";
const postgresBadge = "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white";
const mongodbBadge = "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white";

const scikitlearnBadge = "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white";
const tensorflowBadge = "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white";
const powerbiBadge = "https://img.shields.io/badge/power_bi-F2C811?style=for-the-badge&logo=powerbi&logoColor=black";
const dockerBadge = "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white";
const snowflakeBadge = "https://img.shields.io/badge/Snowflake-29B5E8?style=for-the-badge&logo=Snowflake&logoColor=white";

const javascriptBadge ="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black";
const huggingfaceBadge ="https://img.shields.io/badge/huggingface-%23FFAE1A.svg?style=for-the-badge&logo=huggingface&logoColor=black";
const torchBadge = "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white";
const gptBadge = "https://img.shields.io/badge/GPT-412991?style=for-the-badge&logo=openai&logoColor=white";
const dartBadge = "https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white";
const dalleBadge = "https://img.shields.io/badge/DALL·E-000000.svg?style=for-the-badge&logo=openai&logoColor=white";
const digitalOceanBadge = "https://img.shields.io/badge/DigitalOcean-%2301A9E1.svg?style=for-the-badge&logo=digitalocean&logoColor=white";
const googleCalendarApiBadge = "https://img.shields.io/badge/Google%20Calendar%20API-%23EA4335.svg?style=for-the-badge&logo=google-calendar&logoColor=white";
const denodoBadge = "https://img.shields.io/badge/Denodo-%230081C4.svg?style=for-the-badge&logo=denodo&logoColor=white";
const ibmWatsonBadge = "https://img.shields.io/badge/IBM%20Watson-%23104E8B.svg?style=for-the-badge&logo=ibm&logoColor=white";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <BlogsCourses/>
      <hr className="section-divider" />
      {/* Certifications Section */}
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certificates I've got.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={dp_700}
              title={
                <>
                  Microsoft Fabric Data Engineer Associate
                </>
              }             
              link="https://learn.microsoft.com/api/credentials/share/fr-fr/EL-Soufiane/C0E17EB398300E40?sharingId=44BF4D866025AA1E"
              company="Azure"
              companyLink="https://azure.microsoft.com/"
              skills={[
                "Data Ingestion",
                "Data Engineering","Spark"
              ]}
            />
          </Col>
        <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={pl_300}
              title={
                <>
                  Power BI Data Analyst Associate
                </>
              }             
              link="https://learn.microsoft.com/api/credentials/share/en-us/EL-Soufiane/533F7FFDFF94188?sharingId=44BF4D866025AA1E"
              company="Azure"
              companyLink="https://azure.microsoft.com/"
              skills={[
                "Data Analysis",
                "PowerBI" , "DataModeling"
              ]}
            />
          </Col>
        <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={dp_900}
              title={
                <>
                  Microsoft Azure Data Fundamentals (DP-900)
                </>
              }             
              link="https://learn.microsoft.com/en-us/users/el-soufiane/credentials/7cab9d345c948fc8"
              company="Azure"
              companyLink="https://azure.microsoft.com/"
              skills={[
                "DataAnalytics",
                "BigData" , "SQL/NoSQL"
              ]}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={az_900}
              title={
                <>
                  Microsoft Azure Fundamentals <br /> (AZ-900)
                </>
              }             
              link="https://learn.microsoft.com/en-us/users/el-soufiane/credentials/464e9e03df1f360e"
              company="Azure"
              companyLink="https://azure.microsoft.com/"
              skills={[
                "Cloud",
                "management" , "governance"
              ]}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={ibm_iavs}
              title={
                <>
                  Introduction to IVAs with <br /> IBM watsonx Assistant
                </>
              }             
              link="https://www.credly.com/badges/5d4a2db0-51b9-43dd-97cf-1f1220c2318e"
              company="IBM"
              companyLink="https://www.ibm.com"
              skills={[
                "Chatbots",
                "Virtual Assistants","AI"
              ]}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={ibm_chatbot}
              title={
                <>
                  Build Your Own Chatbot in <br /> IBM
                </>
              }
              link="https://www.credly.com/badges/d22810c7-ebff-4d1b-812d-5e344df9d5b6/public_url"
              company="IBM"
              companyLink="https://www.ibm.com"
              skills={[
                "Chatbots",
                "AI",
                "IBM Watson",

              ]}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={tensorflow_localization}
              title={
                <>
                  Object Localization with <br />TensorFlow
                </>
              }
              link="https://www.coursera.org/account/accomplishments/verify/KRDPVBU23ERH"
              company="Coursera"
              companyLink="https://www.coursera.org"
              skills={[
                "Computer Vision","Deep learning"
              ]}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={fine_bert}
              title="Fine Tune BERT for Text Classification with TensorFlow"
              link="https://www.coursera.org/account/accomplishments/verify/CED2XL7H8MJN"
              company="Coursera"
              companyLink="https://www.coursera.org"
              skills={[
                "TensorFlow",
                "Bert","NLP"
              ]}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={tweet_emotion}
              title="Tweet Emotion Recognition with TensorFlow"
              link="https://www.coursera.org/account/accomplishments/verify/5SLT7RGVWYZ2"
              company="Coursera"
              companyLink="https://www.coursera.org"
              skills={[
                "TensorFlow","Deep Learning",
                "NLP"
              ]}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={exploratory_data}
              title="Exploratory Data Analysis with Seaborn"
              link="https://www.coursera.org/account/accomplishments/verify/4SPQ9Q7NBJ2X"
              company="Coursera"
              companyLink="https://www.coursera.org"
              skills={[
                "Data Analysis","Python",
                "Data Science"
              ]}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={googleai_platform}
              title="Custom Prediction Routine on Google AI Platform"
              link="https://www.coursera.org/account/accomplishments/verify/KEPSTKQ6T39H"
              company="Coursera"
              companyLink="https://www.coursera.org"
              skills={[
                "Artificial Intelligence","Google AI Platform"               
              ]}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={dataiku_ml}
              title="Build your first Machine Learning Pipeline using Dataiku"
              link="https://www.coursera.org/account/accomplishments/verify/FXETDBNEAQ92"
              company="Coursera"
              companyLink="https://www.coursera.org"
              skills={[
                "ML","Dataiku"               
              ]}
            />
          </Col>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={jira_start}
              title="Get started with Jira Coursera Project Network"
              link="https://www.coursera.org/account/accomplishments/verify/X3V4C9FJBF2B"
              company="Coursera"
              companyLink="https://www.coursera.org"
              skills={[
                "Jira","Leadership and Management"               
              ]}
            />
          </Col>
        </Row>
        
      </Container>
      <hr className="section-divider" />
      {/* Projects Section */}
      <Container>        
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financial_extractor}
              isBlog={false}
              title="Financial Reports Extractor"
              description="Our tool automates the extraction of key financial statements from reports, providing quick and easy access to essential financial data."
              tools={[pythonBadge, flaskBadge,reactBadge,opencvBadge]}
              ghLink="https://github.com/SoufianeElghazi/financial-data-extractor"
              demoLink="https://youtu.be/FLcigL1CQls"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news_summary}
              isBlog={false}
              title="News Summarizer"
              description="Our app counters social media censorship by providing direct access to comprehensive news articles, summarizing them for quick insights."
              tools={[flaskBadge,huggingfaceBadge,javascriptBadge,tensorflowBadge]}
              ghLink="https://github.com/SoufianeElghazi/News_Summarizer.git"
              demoLink="https://www.youtube.com/watch?v=MhLC1_KeKY8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn_predict}
              isBlog={false}
              title="Real Time Churn Prediction"
              description="Predicts telecom customer churn using PySpark and Random Forest, with real-time data via Kafka and Spark, stored in Snowflake, and visualized in Power BI."
              tools={[kafkaBadge,snowflakeBadge,sparkBadge,powerbiBadge]}
              ghLink="https://github.com/SoufianeElghazi/Spark-Real-Time-Churn-Prediction.git"
              demoLink="https://www.youtube.com/watch?v=rE4K0Vta9rE"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraud_detection}
              isBlog={false}
              title="Online Fraud Detection"
              description="Build a GNN (Graph Neural Network) for predicting the online fraud transactions to better capture transaction patterns using flask as backend API and React js for frontend. "
              tools={[pythonBadge,reactBadge,flaskBadge,tensorflowBadge]}
              ghLink="https://github.com/SoufianeElghazi/online-fraud-detection"
              demoLink="https://youtu.be/ywum2pcUfjE"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image_generator_stack}
              isBlog={false}
              title="AI-Powered Image Generation"
              description="Build and Deploy a Full Stack AI Image Generation App with React.js, Flask, and MongoDB using Hugging Face’s Diffusers library and Torch for AI-powered image generation."
              tools={[torchBadge,reactBadge,mongodbBadge,dockerBadge]}
              ghLink="https://github.com/SoufianeElghazi/image-generator-react-diffusers/blob/main/README.md"
              demoLink="https://www.youtube.com/watch?v=L4T2DkvrlHg"
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutter_mobile_assistant}
              isBlog={false}
              title="Mobile Virtual Voice Assistant Application"
              description="Built a Personal Virtual Voice Assistant app using Flutter, powered by ChatGPT and DallE API, for seamless voice interactions and image generation."
              tools={[flutterBadge,dalleBadge,gptBadge,dartBadge]}
              ghLink="https://github.com/SoufianeElghazi/Flutter-mobile-assistant.git"
              demoLink="https://www.youtube.com/watch?v=8lqLA1hLC4M"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutter_chat_gpt}
              isBlog={false}
              title="Flutter Chat Mobile Application with GPT-3"
              description="Flutter app that allows users to chat with OpenAI GPT-3 model, using text input and also speech-to-text conversion for seamless conversations."
              tools={[flutterBadge,gptBadge,dartBadge]}
              ghLink="https://github.com/SoufianeElghazi/Flutter-chat-app-gpt3.git"
              demoLink="https://www.youtube.com/watch?v=v-_egtbbZoM"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voting_systeme}
              isBlog={false}
              title="Real Time Voting Data Engineering Project"
              description="Election voting system with Python, Kafka, Spark , Postgres, and Streamlit. Deployed using Docker Compose for easy service management."
              tools={[kafkaBadge,sparkBadge,dockerBadge,postgresBadge]}
              ghLink="https://github.com/SoufianeElghazi/Realtime-Voting-Data-Engineering-Project.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutter_potato_mobile}
              isBlog={false}
              title="Flutter Potato Disease Detector Mobile Application"
              description="Flutter mobile application to detect potato plant diseases using a trained model on three categories of potato with TensorFlow and Flutter."
              tools={[flutterBadge,tensorflowBadge,dartBadge,pythonBadge]}
              ghLink="https://github.com/SoufianeElghazi/Potato-Plant-Disease-Detector.git"
              demoLink="https://www.youtube.com/watch?v=pwwf8YHHoQk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smart_agri}
              isBlog={false}
              title="Smart Agriculture"
              description="Computer Vision Project where we Classified and detected pests, herbicides, and plant diseases, and segmented land cover using Deep Learning models."
              tools={[opencvBadge,scikitlearnBadge]}
              ghLink="https://github.com/SoufianeElghazi/Smart-Agriculture"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerbi_department}
              isBlog={false}
              title="Power Bi Police Departement Incidence Project"
              description="Data manipulation and dashboarding using the incidents recorded by the San Francisco Police Department dataset for insightful analytics."
              tools={[powerbiBadge]}
              ghLink="https://github.com/SoufianeElghazi/PowerBI-Police-Department-Incidents.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book_esi}
              isBlog={false}
              title="Book-ESI: Online reservation system for small businesses"
              description="Book-ESI app helps small businesses create service platforms with a user-friendly calendar, enabling clients to book appointments from home."
              tools={[digitalOceanBadge,googleCalendarApiBadge]}
              ghLink="https://github.com/SoufianeElghazi/Cloud-Computing.git"
              demoLink="https://www.youtube.com/watch?v=WTJK4YWfwK0&feature=youtu.be"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualization_denodo}
              isBlog={false}
              title="Denodo Data Virtualization"
              description="Data virtualization using Denodo to integrate data from Snowflake, Oracle, Cassandra, and Hadoop for seamless data management and analysis  through a unified abstraction layer."
              tools={[denodoBadge]}
              ghLink="https://github.com/SoufianeElghazi/Denodo-Data-Virtualization-Project.git"
              demoLink="https://www.youtube.com/watch?v=G0QnSNi2QkI"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant_site}
              isBlog={false}
              title="Restaurant Website"
              description="Fully responsive restaurant website for all devices, built using HTML, CSS, JavaScript, and includes a small IBM Watson Assistant for interaction and communication."
              tools={[javascriptBadge,ibmWatsonBadge]}
              ghLink="https://github.com/SoufianeElghazi/Souf.github.io.git"
              demoLink="https://soufiane-restaurant.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greenfuture}
              isBlog={false}
              title="Green Future"
              tools={[wordpressBadge]}
              description="WordPress showcase site for Green Future, highlighting agricultural inputs, including irrigation systems, phytosanitary products and agricultural equipment."
              demoLink="https://greenfutureproducts.com/"
            />
          </Col>         
        </Row>
      </Container>
      <Articles/>
      <LeetCodeDashboard/>
      <hr className="section-divider" />
      <Testimonials/>
      <Detaills/>
      
    </Container>
  );
}


export default Projects;
