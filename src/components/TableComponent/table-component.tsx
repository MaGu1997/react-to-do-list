// import { useState } from "react";
import { Table } from "react-bootstrap";
import { mockToDoListData, TableColumnNames } from "../constants";
import TableRowComponent from "./TableRowComponent";
function ColumnName({ titleofcolumn }: { titleofcolumn: string }) {
  return (
    <th scope="col" data-qa-id={`column-${titleofcolumn}`}>
      {titleofcolumn}
    </th>
  );
}

export default function TableComponent() {
  return (
    <Table>
      <thead>
        <tr>
          {Object.values(TableColumnNames).map((columnName, index) => (
            <ColumnName key={index} titleofcolumn={columnName} />
          ))}
        </tr>
      </thead>
      <tbody>
        {mockToDoListData.map((value, index) => (
          <TableRowComponent key={index} itemId={index} dataValue={value} />
        ))}
      </tbody>
      <tfoot>
        <th scope="row">Total albums</th>
        <td>{mockToDoListData.length}</td>
      </tfoot>
    </Table>
  );
}
