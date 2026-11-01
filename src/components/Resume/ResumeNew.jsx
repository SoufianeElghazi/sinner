import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
const myCv = `${import.meta.env.BASE_URL}cv.pdf`;
import LeetCodeDashboard from "../About/Leetcode";
import Detaills from "../Detaills";
import Testimonials from "../Testimonials";
import Deferred from "../Deferred";

// Bundle the exact matching worker locally; no CDN dependency or executable PDF JavaScript.
pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
const pdfOptions = { isEvalSupported: false };

export default function ResumeNew() {
  const containerRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    const update = () => setWidth(Math.max(1, Math.floor(element.getBoundingClientRect().width)));
    update();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="resume-section">
      <h1 className="project-heading">My Recent <strong className="purple">Resume</strong></h1>
      <hr className="section-divider" />
      <div className="resume-document" ref={containerRef}>
        {width > 0 && (
          <Document file={myCv} options={pdfOptions}
            onLoadSuccess={({ numPages: count }) => setNumPages(count)}
            loading={<p role="status">Loading resume…</p>}
            error={<p role="alert">The preview could not load. Please use the download button below.</p>}
          >
            {Array.from({ length: numPages }, (_, index) => {
              const page = <Page pageNumber={index + 1} width={width} devicePixelRatio={Math.min(window.devicePixelRatio || 1, 2)}
                className="pdf-page" loading={<p role="status">Loading page {index + 1}…</p>} />;
              return index === 0 ? <React.Fragment key={index}>{page}</React.Fragment>
                : <Deferred key={index} label={`Resume page ${index + 1}`} minHeight={width * 1.414}>{page}</Deferred>;
            })}
          </Document>
        )}
      </div>
      <a className="btn btn-primary download-button" href={myCv} download="Soufiane_Elghazi_CV.pdf">
        <AiOutlineDownload aria-hidden="true" /> Download CV
      </a>
      <LeetCodeDashboard />
      <Testimonials />
      <hr className="section-divider" />
      <Detaills />
    </Container>
  );
}
