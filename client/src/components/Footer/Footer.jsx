import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div
      style={{ color: "var(--white)", backgroundColor: "var(--purple)" }}
      className="grid-footer__name d-flex justify-content-center align-items-center p-3"
    >
      Notes Stack, <span className="font-weight-bold">&nbsp;MERN</span>
      -stack
      <span className="font-weight-bold">&nbsp;CRUD&nbsp;</span> application.
    </div>
  );
}
