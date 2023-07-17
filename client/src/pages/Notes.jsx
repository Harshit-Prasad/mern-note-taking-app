import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import Main from "../components/Main/Main";
import CustomToggle from "../components/CustomToggle/CustomToggle";
import axios from "axios";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const deleteHandler = (event, id) => {
    if (window.confirm("Are you sure ?")) console.log(id);
  };

  async function getData() {
    const { data } = await axios("/api/notes/");
    setNotes(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Main title={`Welcomback ${"user"}`}>
      <Link to="/newNote">
        <Button variant="primary" size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.length !== 0 ? (
        notes.map((note, i) => {
          return (
            <Accordion flush className="mt-1" key={note._id}>
              <Card className="mt-2">
                <Card.Header className="d-flex align-items-center p-0">
                  <CustomToggle
                    eventKey="0"
                    className="flex-grow-1 font-weight-bold p-3"
                  >
                    {note.title}
                  </CustomToggle>
                  <div className="d-flex pr-md-3" style={{ gap: "1rem" }}>
                    <Link to={`/note/${note._id}`}>
                      <Button variant="primary">Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={(e) => deleteHandler(e, note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge
                        style={{ color: "var(--white)" }}
                        bg="success"
                        className=""
                      >
                        {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.{" "}
                      </p>
                      <footer className="blockquote-footer">
                        Created at
                        <cite title="Source Title"> Source Title</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
    </Main>
  );
}
