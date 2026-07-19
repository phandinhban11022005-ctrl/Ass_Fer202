import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { selectFavoriteCount } from "../store/favoritesSlice";

// LO4: Bootstrap / React-Bootstrap used for the navbar layout.
const AppNavbar = () => {
  // LO8: reading global Redux state to show a live summary (favorite count).
  const favoriteCount = useSelector(selectFavoriteCount);

  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? " active fw-semibold" : ""}`;

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="px-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Product Explorer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-md-center gap-2">
            <Nav.Link as={NavLink} to="/" className={linkClass} end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/feature" className={linkClass}>
              Main Feature
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={linkClass}>
              About
            </Nav.Link>
            <span className="text-light">
              Favorites{" "}
              <Badge bg="danger" pill>
                {favoriteCount}
              </Badge>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
