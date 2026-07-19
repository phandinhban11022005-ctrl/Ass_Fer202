import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const NotFound = () => (
  <Container className="py-5 text-center">
    <h2>404 — Page not found</h2>
    <p className="text-muted">The page you're looking for doesn't exist.</p>
    <Link to="/" className="btn btn-primary">
      Go home
    </Link>
  </Container>
);

export default NotFound;
