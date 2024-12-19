// import { useState } from "react";
import { Button } from "react-bootstrap";
import { ButtonNames } from "../constants";

export function CompletedToDoButton() {
  // const [selected, setSelected] = useState("");
  return <Button>{ButtonNames.completedToDo}</Button>;
}
