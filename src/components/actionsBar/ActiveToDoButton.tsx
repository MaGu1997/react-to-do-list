// import { useState } from "react";
import { Button } from "react-bootstrap";
import { ButtonNames } from "../constants";

export function ActiveToDoButton() {
  return <Button>{ButtonNames.activeToDo}</Button>;
}
