// import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { ButtonNames } from "../constants";

export function ActiveToDoButton() {
  return (
    <Col xs="2">
      <Button>{ButtonNames.activeToDo}</Button>
    </Col>
  );
}
