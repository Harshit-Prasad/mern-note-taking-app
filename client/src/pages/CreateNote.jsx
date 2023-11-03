import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useCreateNoteMutation } from "../slices/api-slice/noteApi";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { toast } from "react-toastify";
import Main from "../components/Main/Main";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const [createNote, { isLoading }] = useCreateNoteMutation();

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !content || !category) return;

    const createdNote = await createNote({ title, content, category }).unwrap();

    if (createdNote) toast.success("New note created");

    resetHandler();
    navigate("/notes");
  };

  return (
    <Main title={"Create a Note"}>
      <Card>
        <Card.Header>Create a new Note</Card.Header>

        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mt-1" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-2" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-2" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Loader isLoading={isLoading} />

            <Button className="mt-2 mr-1" type="submit" variant="primary">
              Create Note
            </Button>
            <Button
              className="mt-2 ml-1"
              onClick={resetHandler}
              variant="danger"
            >
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </Main>
  );
}
