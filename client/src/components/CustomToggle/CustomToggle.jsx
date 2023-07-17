import React from "react";
import { useAccordionButton } from "react-bootstrap";

export default function CustomToggle({ children, eventKey, className }) {
  const toggleAccordian = useAccordionButton(eventKey);

  return (
    <span
      style={{ cursor: "pointer" }}
      className={`${className}`}
      onClick={toggleAccordian}
    >
      {children}
    </span>
  );
}
