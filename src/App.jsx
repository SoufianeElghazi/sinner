import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";
import ErrorBoundary from "./components/ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./theme.css";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Particle />
        <Navbar />
        <ScrollToTop />
        <Analytics />
        <main id="main-content" tabIndex={-1}>
          <ErrorBoundary>
            <Suspense fallback={<div className="route-status" role="status">Loading page…</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
