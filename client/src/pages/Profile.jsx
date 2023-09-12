import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useUpdateUserMutation } from "../slices/api-slice/userApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInformation } = useSelector((state) => state.authentication);
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const navigate = useNavigate();

  useEffect(() => {
    const { name, email } = userInformation;

    setName(name);
    setEmail(email);
  }, [userInformation]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      toast.error("Password and confirm password should be same");
    } else {
      try {
        await updateProfile({ name, email, password }).unwrap();
        toast.success("Profile Updated Successfully");
        navigate("/notes");
      } catch (error) {
        toast.error(error?.data?.message);
      }
    }
  };

  return (
    <Main title="Profile">
      <Row className="profileContainer">
        <Col>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mt-2" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mt-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mt-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mt-2" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button className="mt-3" type="submit" varient="primary">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Main>
  );
}
