// import { useState } from "react";
import { Button } from "react-bootstrap";
import { ButtonNames } from "../constants";

export function ActiveToDoButton() {
  // const [selected, setSelected] = useState("");
  return <Button>{ButtonNames.activeToDo}</Button>;
}
