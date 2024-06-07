import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import tk from './Tkinter.png';
import nlp from './NLP.png';
import rsg from './RSG.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={tk}
              title=""
              description="A python-written contest bot for reminders about contests and fetching details and statistics using commands, NLP and diagflow to be integrated soon."
              ghLink="https://github.com/Demon-Sheriff/ContestBot"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={nlp}
              title=""
              description="Basic NLP pipelines built by me in jupyter notebook"
              ghLink="https://github.com/Demon-Sheriff/NLPlearnings"
            />
          </Col>


          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={rsg}
              title=""
              description="A retro model snake game"
              ghLink="https://github.com/Demon-Sheriff/RetroSnakeGame"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
