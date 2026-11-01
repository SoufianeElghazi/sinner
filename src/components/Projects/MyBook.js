import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

export default function MyBook() {
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <Container as="section" className="book-section" aria-labelledby="book-heading">
      <div className="book-intro">
        <span className="eyebrow">Beyond the technical</span>
        <h1 id="book-heading">My <span>Book</span></h1>
      </div>
      <div className="book-feature">
        <div className="book-artwork">
          <span className="book-orbit" aria-hidden="true" />
          <img
            src={`${publicUrl}/The_Seeker.png`}
            alt="The Seeker book cover, an illustrated journey beneath the sun and moon"
            width="1024"
            height="1536"
            className="book-cover"
          />
        </div>
        <div className="book-copy">
          <span className="eyebrow">Written by Soufiane Elghazi</span>
          <h2>The Seeker<span className="book-title-dot">.</span></h2>
          <p className="book-lead">A different side of my work.</p>
          <p>Alongside the systems I build and the knowledge I share, there is a space for writing. Explore my book, The Seeker.</p>
          <a
            className="btn btn-primary book-download"
            href={`${publicUrl}/The_Seeker.pdf`}
            download="The_Seeker.pdf"
          >
            <AiOutlineDownload aria-hidden="true" />
            Download the book
          </a>
          <span className="book-format">PDF format · Free download</span>
        </div>
      </div>
    </Container>
  );
}
