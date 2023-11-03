import React, { useEffect, useState } from "react";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../slices/authentication-slice/authentication";
import { toast } from "react-toastify";
import { setSearchValue } from "../../slices/search-slice/search";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import "./Header.css";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const { debounceValue } = useDebounce(searchTerm, 500);

  const { searchValue } = useSelector((state) => state.search);
  const { userInformation } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      dispatch(logout());
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  const handleSearch = (e) => {
    const searchedTerm = e.target.value;
    setSearchTerm(() => searchedTerm);
  };

  useEffect(() => {
    dispatch(setSearchValue({ debounceValue }));
  }, [debounceValue]);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg="primary"
      className="grid-header__name pr-md-5 pl-md-5 border-0"
    >
      <Navbar.Brand>
        <Link to="/">Notes Stack</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        {userInformation ? (
          <>
            <Nav className="ml-auto mr-auto my-2 my-lg-0" navbarScroll>
              <Form className="d-flex">
                <Form.Group controlId="search">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleSearch}
                  />
                </Form.Group>
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
