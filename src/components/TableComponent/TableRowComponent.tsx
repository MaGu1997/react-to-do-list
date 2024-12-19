import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { RiDeleteBin5Line } from "@react-icons/all-files/ri/RiDeleteBin5Line";

export default function TableRowComponent({
  itemId,
  dataValue,
}: {
  itemId: number;
  dataValue: any;
}) {
  return (
    <tr>
      <th scope="row">{itemId + 1}</th>
      <td>{dataValue.task}</td>
      <td>{dataValue.description}</td>
      <td>{dataValue.category}</td>
      <td>{dataValue.time}</td>
      <td>{dataValue.priority}</td>
      <td>{dataValue.fulfillment}</td>
      <td>
        <button>
          <FaEdit />
        </button>
      </td>
      <td>
        <button>
          <RiDeleteBin5Line />
        </button>
      </td>
    </tr>
  );
}
