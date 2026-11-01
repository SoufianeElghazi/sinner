import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import article0 from "../../Assets/optimized/CoursesArticles/article0.webp";
import article00 from "../../Assets/optimized/CoursesArticles/article0.webp";
import article1 from "../../Assets/optimized/CoursesArticles/article1.webp";
import article2 from "../../Assets/optimized/CoursesArticles/article2.webp";
import article3 from "../../Assets/optimized/CoursesArticles/article3.webp";
import article4 from "../../Assets/optimized/CoursesArticles/article4.webp";
import article5 from "../../Assets/optimized/CoursesArticles/article5.webp";
import article6 from "../../Assets/optimized/CoursesArticles/article6.webp";
import {  SiMedium } from "react-icons/si";
// Example data for articles and courses
const articlesData = [
 {
    id: 1,
    title: "Understanding DAX Contexts: Filter Context, Row Context, and Context Transition",
    image: article0,
    description: "Explore fundamental DAX filter concepts, context types that will make you able to debugg your DAX code.",
    link: "https://medium.com/@elghazisoufiane02/understanding-dax-contexts-filter-context-row-context-and-context-transition-aba8ac4fa419",
 },
 {
    id: 2,
    title: "Understanding Power BI’s Formula and VertipAQ Storage Engines",
    image: article00,
    description: "Explore fundamental Power BI engines , and architecture that will make you able to optimize your DAX code.",
    link: "https://medium.com/@elghazisoufiane02/understanding-power-bis-formula-and-vertipaq-storage-engines-118951375a9e",
 },
  {
    id: 3,
    title: "Data Engineering Concepts",
    image: article1,
    description: "Explore fundamental data engineering concepts, storage types, architectures, processing methodologies, and optimization techniques.",
    link: "https://medium.com/@elghazisoufiane02/data-engineering-concepts-bcc23aae210c",
  },
  {
    id: 4,
    title: "SQL Execution Plans: Understanding the Engine Behind Your Queries",
    image: article2,
    description: "Discover how SQL execution plans work to optimize query performance efficiently.",
    link: "https://medium.com/@elghazisoufiane02/sql-execution-plans-understanding-the-engine-behind-your-queries-9fe2afde5d87",
  },
  {
    id: 5,
    title: "Mastering SQL Window Functions: Unlocking Advanced Query Power",
    image: article3,
    description: "Unlock advanced SQL techniques with window functions for powerful analytical queries.",
    link: "https://medium.com/@elghazisoufiane02/mastering-sql-window-functions-unlocking-advanced-query-power-45161c3782bf",
  },
  {
    id: 6,
    title: "The Social Life of Orcas: Unveiling the Complex Societies of the Ocean’s Apex Predators",
    image: article4,
    description: "Explore the fascinating world of orcas and their intricate social structures in the wild.",
    link: "https://medium.com/@elghazisoufiane02/the-social-life-of-orcas-unveiling-the-complex-societies-of-the-oceans-apex-predators-d4d44d6bc007",
  },
  {
    id: 7,
    title: "Chess: The Game of Strategy and Genius",
    image: article5,
    description: "Delve into the brilliance of chess, a game of strategy, foresight, and intellectual mastery.",
    link: "https://medium.com/@elghazisoufiane02/chess-the-game-of-strategy-and-genius-c8483a5bddf1",
  },
  {
    id: 8,
    title: "Coffee: The Elixir of Productivity",
    image: article6,
    description: "Uncover the history, science, and culture behind coffee, the fuel of productivity.",
    link: "https://medium.com/@elghazisoufiane02/coffee-the-elixir-of-productivity-16a058b1b3ba",
  },

];

function Articles() {
  return (
    <Container fluid className="blogs-courses-section">
      {/* Articles Section */}
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Articles</strong>
        </h1>
        <p style={{ color: "var(--ink)" }}>
          Here are some of my articles on Medium.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {articlesData.map((article) => (
            <Col md={6} className="article-card" key={article.id}>
              <Card className="article-card-view">
              <Card.Img loading="lazy" decoding="async" variant="top" src={article.image} alt={article.title} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <Button variant="primary" href={article.link} target="_blank" rel="noopener noreferrer">
                    <SiMedium /> &nbsp;
                    {"Read Article"}
                    
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>     
    </Container>
  );
}

export default Articles;