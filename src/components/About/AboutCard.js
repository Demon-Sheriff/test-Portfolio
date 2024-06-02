import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm  <span className="purple">Anant Shukla, </span>
            a developer from <span className="purple"> Bengaluru, Karnataka.</span>
            <br />
            I appreciate the opportunity for development and friendly staff.
            <br />
            Currently learning the fundamentals of ML, core-NLP, Data Structures& Algorithms, diving into both front-end and back-end technologies.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
