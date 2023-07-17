import React from "react";
import "./Main.css";
import { Container } from "react-bootstrap";

export default function Main({ children, title }) {
  return (
    <div className="grid-main__name pr-md-5 pl-md-5">
      {title && <h1 className="pt-5">{title}</h1>}
      <hr />
      {children}
    </div>
  );
}
