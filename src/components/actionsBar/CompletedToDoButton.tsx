// import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { ButtonNames } from "../constants";

export function CompletedToDoButton() {
  // const [selected, setSelected] = useState("");
  return (
    <Col xs="2">
      <Button>{ButtonNames.completedToDo}</Button>;
    </Col>
  );
}
