import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg="primary"
      className="grid-header__name pr-md-5 pl-md-5"
    >
      <Navbar.Brand>
        <Link to="/">Note Stack</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ml-auto mr-auto my-2 my-lg-0" navbarScroll>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
        </Nav>
        <Nav>
          <Nav.Link>
            <Link to="/notes">Notes</Link>
          </Nav.Link>
          <NavDropdown title="User" id="navbarScrollingDropdown">
            <NavDropdown.Item>
              <Link to="/profile">Profile</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/logout">Logout</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
