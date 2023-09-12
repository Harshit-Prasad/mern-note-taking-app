import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../slices/api-slice/userApi";
import { setCredentials } from "../slices/authentication-slice/authentication";
import Loader from "../components/Loader/Loader";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password }).unwrap();
      toast.success("Logged in successfully");
      dispatch(setCredentials({ ...response }));
      navigate("/notes");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <Main title="Login">
      <Loader isLoading={isLoading} />
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="pt-2">Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="pt-2">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer ?{" "}
          <Link style={{ color: "var(--primary)" }} to="/register">
            Register
          </Link>
        </Col>
      </Row>
    </Main>
  );
}
