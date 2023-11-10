import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteNoteMutation,
  useGetNoteQuery,
  useUpdateNoteMutation,
} from "../slices/api-slice/noteApi";
import { toast } from "react-toastify";
import Main from "../components/Main/Main";
import Loader from "../components/Loader/Loader";

export default function Note() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const { data: note, isLoading: getLoading } = useGetNoteQuery(id);
  const [deleteNote, { isLoading: deleteLoading }] = useDeleteNoteMutation();
  const [updateNote, { isLoading: updateLoading }] = useUpdateNoteMutation();

  const deleteHandler = async () => {
    if (window.confirm("Are you sure?")) {
      await deleteNote(id).unwrap();
      toast.success("Note was deleted Successfully");
    }
    navigate("/notes");
  };

  useEffect(() => {
    if (!note) return;
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setDate(note.updatedAt);
  }, [getLoading, note]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;

    try {
      const response = await updateNote({
        id,
        title,
        content,
        category,
      }).unwrap();

      if (response) toast.success("Note was Updated successfully");
      navigate("/notes");
    } catch (error) {
      toast.error(error?.data?.message);
      navigate("/notes");
    }

    resetHandler();
    navigate("/notes");
  };

  return (
    <Main title="Edit your note">
      <Card>
        <Card.Header>Edit your Note</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            <Loader isLoading={updateLoading} />

            <Form.Group className="mt-2" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-2" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the content"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-2" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                placeholder="Enter the Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Loader isLoading={deleteLoading} size={50} />

            <Button className="mt-3" variant="primary" type="submit">
              Update Note
            </Button>
            <Button
              className="ml-2 mt-3"
              variant="danger"
              onClick={deleteHandler}
            >
              Delete Note
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {date.substring(0, 10)}
        </Card.Footer>
      </Card>
    </Main>
  );
}
