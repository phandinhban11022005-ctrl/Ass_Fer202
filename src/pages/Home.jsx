import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container className="pt-4">
      <div className="hero-section text-center">
        <h1 className="fw-bold">Welcome to Product Explorer</h1>
        <p className="lead mb-4">
          A small full-stack-feeling React app built for the FER202 "Custom
          React Web Application" assignment — browse products fetched live
          from a public API, save favorites, and manage your own list.
        </p>
        <Button as={Link} to="/feature" size="lg" variant="light">
          Explore Products
        </Button>
      </div>

      <Row className="text-center g-4 mb-4">
        <Col md={4}>
          <h5>🔎 Live Data</h5>
          <p className="text-muted">
            Products are fetched from a public REST API with proper loading
            and error handling.
          </p>
        </Col>
        <Col md={4}>
          <h5>❤️ Favorites</h5>
          <p className="text-muted">
            A global Redux store keeps track of your favorite products across
            every page, summarized right in the navbar.
          </p>
        </Col>
        <Col md={4}>
          <h5>✏️ Full CRUD</h5>
          <p className="text-muted">
            Add new products, delete existing ones, view full details, and
            edit information — all in one place.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
