import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/letter-a.png";

export default function Header() {
  return (
    <Navbar id="header-navbar" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">
          {" "}
          <img
            src={logo}
            className="d-inline-block align-top logo-icon"
            alt="website logo letter A"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="projectGallery"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Project Gallery
            </NavLink>
            <NavLink
              to="resume"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
