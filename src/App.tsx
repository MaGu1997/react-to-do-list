// import { useState } from "react";
import { createContext, StrictMode } from "react";
import ActionsBar from "./components/actionsBar/actions-bar";
import TableComponent from "./components/TableComponent/table-component";
import "bootstrap/dist/css/bootstrap.min.css";

export const TabsContext = createContext("allTodo");

function App() {
  return (
    <StrictMode>
      <ActionsBar />

      <TableComponent />
    </StrictMode>
  );
}

export default App;
