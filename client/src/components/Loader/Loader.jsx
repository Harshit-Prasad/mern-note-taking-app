import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader({ isLoading, size = 75 }) {
  return (
    isLoading && (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner />
      </div>
    )
  );
}
