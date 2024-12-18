// import { useState } from "react";
import { ButtonNames } from "../constants";
import Button from "react-bootstrap/Button";

export function CompletedToDoButton() {
  // const [selected, setSelected] = useState("");
  return <Button>{ButtonNames.completedToDo}</Button>;
}
