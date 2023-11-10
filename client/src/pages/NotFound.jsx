import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Page Not Found!</h1>
      <Button size="lg">
        <Link to="/">To Home Page</Link>
      </Button>
    </div>
  );
}
