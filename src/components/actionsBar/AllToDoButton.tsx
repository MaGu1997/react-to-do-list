// import { useState } from "react";
import { Button } from "react-bootstrap";
import { ButtonNames } from "../constants";

export function AllToDoButton() {
  // const [selected, setSelected] = useState("");
  return <Button>{ButtonNames.allToDo}</Button>;
}
