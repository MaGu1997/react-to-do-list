import { Col, Row } from "react-bootstrap";
import { ActiveToDoButton } from "./ActiveToDoButton";
import { AddAnewToDoButton } from "./AddAnewToDoButton";
import { AllToDoButton } from "./AllToDoButton";
import { CompletedToDoButton } from "./CompletedToDoButton";
import Container from "react-bootstrap/Container";

export default function ActionsBar() {
  return (
    <Container>
      <Row>
        <Col xs="3">
          <AddAnewToDoButton />
        </Col>
        <Col xs="3">
          <AllToDoButton />
        </Col>
        <Col xs="3">
          <ActiveToDoButton />
        </Col>
        <Col xs="3">
          <CompletedToDoButton />
        </Col>
      </Row>
    </Container>
  );
}
