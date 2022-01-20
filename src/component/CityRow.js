import { useState } from "react";
import { Button } from "react-bootstrap";
import CityDeleteModal from "./CityDeleteModal";
import CityEditModal from "./CityEditModal";
import CityViewModal from "./CityViewModal";
// import UserDeleteModal from "./UserDeleteModal";
// import UserViewModal from "./UserViewModal";

function CityRow(props) {
  const { city } = props;
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
        {city._id}
      </td>
      <td>{city.nameOfCity}</td>

      <td>
        <img
          src={city.image}
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
      <CityViewModal show={viewShow} setShow={setViewShow} city={city} />
      <CityEditModal show={editShow} setShow={setEditShow} city={city} />
      <CityDeleteModal
        show={deleteShow}
        setShow={setDeleteShow}
        cityId={city._id}
      />
    </tr>
  );
}

export default CityRow;
