import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

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
              imgPath={""}
              isBlog={false}
              title=""
              description=""
              ghLink=""
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title=""
              description=""
              ghLink=""
            />
          </Col>


          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
