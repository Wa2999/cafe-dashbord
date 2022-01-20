import { useState } from "react";
import { Button } from "react-bootstrap";
import CoffeeDeleteModal from "./CoffeeDeleteModal";
import CoffeeEditModal from "./CoffeeEditModal";
import CoffeeViewModal from "./CoffeeViewModal";
// import UserDeleteModal from "./UserDeleteModal";
// import UserViewModal from "./UserViewModal";

function CoffeeRow(props) {
  const { coffee } = props;
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  return (
    <tr
      style={{
        verticalAlign: "middle",
        tableLayout: "fixed",
        wordWrap: "break-word",
      }}
    >
      <td
        style={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {coffee._id}
      </td>
      <td>{coffee.name}</td>
      <td>
        <img
          src={coffee.image}
          style={{ objectFit: "contain", height: "100px", width: "100%" }}
        />
      </td>
      <td>
        <Button
          variant="info"
          className="me-2"
          onClick={() => setViewShow(true)}
        >
          View
        </Button>
        <Button
          variant="success"
          className="me-2"
          onClick={() => setEditShow(true)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <CoffeeViewModal show={viewShow} setShow={setViewShow} coffee={coffee} />
      <CoffeeEditModal show={editShow} setShow={setEditShow} coffee={coffee} />
      <CoffeeDeleteModal
        show={deleteShow}
        setShow={setDeleteShow}
        coffeeId={coffee._id}
      />
    </tr>
  );
}

export default CoffeeRow;
