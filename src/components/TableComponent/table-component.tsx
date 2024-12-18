// import { useState } from "react";
import { TableColumnNames } from "../constants";
import { Container } from "react-bootstrap";

function ColumnName({ titleofcolumn }: { titleofcolumn: string }) {
  return <th data-qa-id={`column-${titleofcolumn}`}>{titleofcolumn}</th>;
}

export default function TableComponent() {
  return (
    <table>
      <tbody>
        <tr>
          {Object.values(TableColumnNames).map((columnName, index) => (
            <ColumnName key={index} titleofcolumn={columnName} />
          ))}
        </tr>
      </tbody>
    </table>
  );
}
