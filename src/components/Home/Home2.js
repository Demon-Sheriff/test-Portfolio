import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              My field of Interest's is building
                <b className="purple"> new and innovative</b> ML models
                that solve real-world problems.{" "}
                <b className="purple">
                I enjoy creating and bringing ideas to life through code.
                </b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">cutting-edge technologies</b> and
                <b className="purple">
                  {" "}
                  staying up-to-date
                </b>
              &nbsp; with
                <b className="purple"> the latest trends in tech.</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Demon-Sheriff"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
