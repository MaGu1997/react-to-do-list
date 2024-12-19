import { useState } from "react";
import { ButtonNames } from "../constants";
import { Button, Col } from "react-bootstrap";

export function AddAnewToDoButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Col xs="6">
      <Button variant="primary" active onClick={handleClick}>
        {ButtonNames.addanewtodo}
      </Button>
    </Col>
  );
}
