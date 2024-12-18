// import { useState } from "react";
import "./App.css";
import ActionsBar from "./components/actionsBar/actions-bar";
import TableComponent from "./components/TableComponent/table-component";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ActionsBar />
        <TableComponent />
      </div>
    </>
  );
}

export default App;
