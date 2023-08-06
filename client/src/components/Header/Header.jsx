import React from "react";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../slices/authentication-slice/authentication";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Header() {
  const { userInformation } = useSelector((state) => state.authentication);

  console.log(userInformation);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      dispatch(logout());
      toast.success("User Logged out successfully");
      navigate("/");
    } catch (error) {}
  };

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
        {userInformation ? (
          <>
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
              <LinkContainer to="/notes">
                <Nav.Link>Notes</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title={userInformation.name}
                id="navbarScrollingDropdown"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/logout">
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </>
        ) : (
          <Nav className="ml-auto">
            <LinkContainer to="/login">
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
