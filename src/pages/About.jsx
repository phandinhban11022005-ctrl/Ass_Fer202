import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

const About = () => {
  return (
    <Container className="py-4" style={{ maxWidth: 760 }}>
      <h2 className="mb-3">About this project</h2>
      <p>
        <strong>Product Explorer</strong> is a submission for the FER202
        course assignment <em>"Custom React Web Application"</em>. It
        demonstrates the learning outcomes LO1 through LO8 using a small
        product-browsing app built with Create React App.
      </p>

      <h5 className="mt-4">Tech stack</h5>
      <ListGroup className="mb-4">
        <ListGroup.Item>React 18 (functional + class components)</ListGroup.Item>
        <ListGroup.Item>React Router v6 for navigation</ListGroup.Item>
        <ListGroup.Item>Redux Toolkit + React-Redux for global state</ListGroup.Item>
        <ListGroup.Item>React-Bootstrap + Bootstrap 5 + custom CSS</ListGroup.Item>
        <ListGroup.Item>Fetch API against a public REST endpoint</ListGroup.Item>
      </ListGroup>

      <h5>Team / Contribution</h5>
      <p className="text-muted">
        Replace this section with your own name(s) and a short breakdown of
        who worked on which learning outcome, as required by the assignment
        submission checklist (README.md).
      </p>
    </Container>
  );
};

export default About;
