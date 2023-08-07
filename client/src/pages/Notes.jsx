import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import Main from "../components/Main/Main";
import Loader from "../components/Loader/Loader";
import CustomToggle from "../components/CustomToggle/CustomToggle";
import { useNotesQuery } from "../slices/api-slice/noteApi";

export default function Notes() {
  const { data: notes, isLoading } = useNotesQuery();

  const deleteHandler = (event, id) => {
    if (window.confirm("Are you sure ?")) console.log(id);
  };

  console.log(notes);

  return (
    <Main title={`Welcomback ${"user"}`}>
      <Link to="/newNote">
        <Button variant="primary" size="lg">
          Create New Note
        </Button>
      </Link>
      <Loader isLoading={isLoading} />
      {notes?.length !== 0 &&
        notes?.map((note, i) => {
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
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.split("T")[0]}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })}
    </Main>
  );
}
