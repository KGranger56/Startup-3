import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navibar() {
  return (
    <Container className="navbar">
      <h3 className="heading brand">Startup 3</h3>
      <Navbar variant="var(--main-bg)">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#shop">Shop</Nav.Link>
          <Nav.Link href="#search">
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              className="search-icon"
            />
          </Nav.Link>
        </Nav>
      </Navbar>
      <h3 className="heading text">Sign In</h3>
      <button className="button">Sign Up</button>
    </Container>
  );
}

export default Navibar;
