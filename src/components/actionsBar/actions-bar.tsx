import { ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { ActiveToDoButton } from "./ActiveToDoButton";
import { AddAnewToDoButton } from "./AddAnewToDoButton.1";
import { AllToDoButton } from "./AllToDoButton";
import { CompletedToDoButton } from "./CompletedToDoButton";

export default function ActionsBar() {
  return (
    <ButtonToolbar>
      <ButtonGroup className="me-2" aria-label="First group">
        <AddAnewToDoButton />
      </ButtonGroup>
      <ButtonGroup className="me-3" aria-label="Second group">
        <AllToDoButton />
        <ActiveToDoButton />
        <CompletedToDoButton />
      </ButtonGroup>
    </ButtonToolbar>
  );
}
