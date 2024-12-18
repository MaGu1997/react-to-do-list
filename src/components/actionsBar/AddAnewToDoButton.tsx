import { useState } from "react";
import { ButtonNames } from "../constants";
import { Button } from "react-bootstrap";

export function AddAnewToDoButton() {
  // const [selected, setSelected] = useState("");
  var [isActive, setIsActive] = useState(false);

  const buttonStyle = {
    margin: "0 auto",
    backgroundColor: isActive ? "green" : "gray",
    cursor: isActive ? "pointer" : "not-allowed",
    color: "white",
    padding: "0.6rem 1.2rem",
    border: "none",
  };

  return (
    <Button
      style={buttonStyle}
      onClick={() => setIsActive((isActive = !isActive))}
    >
      {ButtonNames.addanewtodo}
    </Button>
  );
}
