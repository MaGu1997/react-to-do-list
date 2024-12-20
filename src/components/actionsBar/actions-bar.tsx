import { Container, Row, Tab, Tabs } from "react-bootstrap";
import { ButtonNames } from "../constants";
import { AddAnewToDoButton } from "./AddAnewToDoButton";
import { useContext, useState } from "react";
import { TabsContext } from "../../App";

export default function ActionsBar() {
  const [key, setKey] = useState("allTodo");
  function handleSelect(eventKey: string | null) {
    if (eventKey !== null && eventKey !== undefined) {
      setKey(eventKey);
    }
  }
  const selectedTab = useContext(TabsContext);
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
