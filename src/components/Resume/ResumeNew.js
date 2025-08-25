import React, { useState   } from "react";
import { Container, Row ,Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particle";
import my_cv from "../../Assets/CV.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import LeetCodeDashboard  from "../About/Leetcode";
import Detaills from "../Detaills";
import Testimonials from "../Testimonials";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Particle />
      <Container fluid className="resume-section">        
        <Row style={{ justifyContent: "center" }}>
          <h1 className="project-heading">
            My Recent <strong className="purple">Resume </strong>
          </h1>    
          <hr className="section-divider" />
          <br/>
          <Col md={8} >             
            <Document
                file={my_cv}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      scale={window.innerWidth < 768 ? 0.6 : 1.5}
                      className="pdf-page"
                    />
                  )
                )}
              </Document>       
              <br/>
          </Col>
          
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button
            variant="primary"
            href={my_cv}
            target="_blank"
            style={{ maxWidth: "200px" ,width:"150px" ,height:"50px", alignContent:"center" }}
            className="download-button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <br/>
          </Row>
        </Row>
        <LeetCodeDashboard/>
        <Testimonials/>
        <hr className="section-divider" />
        <Detaills/>
        
      </Container>
    </div>
  );
}

export default ResumeNew;
