import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../slices/authentication-slice/authentication";

export default function Home() {
  const { userInformation } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    console.log(e);

    dispatch(logout());
  };

  return (
    <Container className="d-flex justify-content-center align-items-center w-100">
      <Row>
        <div className="intro-text">
          <div>
            <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
              Welcome to Note Zipper
            </h1>
            <p style={{ textAlign: "center", fontSize: "2rem" }}>
              One Safe place for all your notes.
            </p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ gap: "2rem" }}
          >
            {userInformation ? (
              <>
                <Button onClick={handleLogout} size="lg">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button size="lg">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline-primary" size="lg">
                    Signup
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Row>
    </Container>
  );
}
