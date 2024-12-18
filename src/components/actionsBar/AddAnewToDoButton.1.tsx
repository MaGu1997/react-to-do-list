import { useState } from "react";
import { ButtonNames } from "../constants";
import { Button } from "react-bootstrap";

export function AddAnewToDoButton() {
  var [isActive, setIsActive] = useState(false);

  return (
    <Button onClick={() => setIsActive((isActive = !isActive))}>
      {ButtonNames.addanewtodo}
    </Button>
  );
}
