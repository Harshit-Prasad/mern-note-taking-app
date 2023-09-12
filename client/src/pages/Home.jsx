import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  logout,
  setCredentials,
} from "../slices/authentication-slice/authentication";
import { toast } from "react-toastify";
import { useLoginMutation } from "../slices/api-slice/userApi";
import Loader from "../components/Loader/Loader";

export default function Home() {
  const { userInformation } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    toast.success("User successfully logged out");
    dispatch(logout());
  };

  const [login, { isLoading }] = useLoginMutation();

  const loginTestUser = async (e) => {
    e.preventDefault();
    const request = {
      email: "testuser@email.com",
      password: "123456",
    };
    try {
      const response = await login(request).unwrap();
      toast.success("Logged in successfully");
      dispatch(setCredentials({ ...response }));
      navigate("/notes");
    } catch (error) {
      toast.error(error?.data?.message);
    }
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
            className="mt-4 d-flex justify-content-center align-items-center"
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

          {isLoading ? (
            <Loader />
          ) : (
            !userInformation && (
              <div className="mt-4 d-flex justify-content-center align-items-center">
                <Button size="lg" variant="info" onClick={loginTestUser}>
                  Login as a Test User
                </Button>
              </div>
            )
          )}
        </div>
      </Row>
    </Container>
  );
}
