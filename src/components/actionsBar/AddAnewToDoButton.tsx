import { useState } from "react";
import { ButtonNames } from "../constants";
import { Button } from "react-bootstrap";

export function AddAnewToDoButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Button variant="secondary" size="lg" active onClick={handleClick}>
      {ButtonNames.addanewtodo}
    </Button>
  );
}
