import { Row, Tab, Tabs } from "react-bootstrap";
import { ActiveToDoButton } from "./ActiveToDoButton";
import { AddAnewToDoButton } from "./AddAnewToDoButton";
import { AllToDoButton } from "./AllToDoButton";
import { CompletedToDoButton } from "./CompletedToDoButton";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { ButtonNames } from "../constants";

export default function ActionsBar() {
  const [key, setKey] = useState("allTodo");
  function handleSelect(eventKey: string | null) {
    if (eventKey !== null && eventKey !== undefined) {
      setKey(eventKey);
    }
  }
  return (
    <Container>
      <Row>
        <AddAnewToDoButton />
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={handleSelect}
          className="mb-3"
        >
          <Tab eventKey="allToDo" title={`${ButtonNames.allToDo}`}>
            <h1>testing</h1>
            {/* <AllToDoButton /> */}
          </Tab>
          <Tab eventKey="activeToDo" title={`${ButtonNames.activeToDo}`}>
            <h1>testing</h1>

            {/* <ActiveToDoButton /> */}
          </Tab>
          <Tab eventKey="completedToDo" title={`${ButtonNames.completedToDo}`}>
            <h1>testing</h1>

            {/* <CompletedToDoButton /> */}
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}
