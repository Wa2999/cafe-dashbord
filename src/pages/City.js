import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { Table } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
// import UserRow from "../components/UserRow";
// import AdminAddModal from "../components/AdminAddModal";
import CityRow from "../component/CityRow";
import CityAddModle from "../component/CityAddModle";
import CoffeeContext from "../utils/CoffeeContext";

function Cities() {
  const { cities } = useContext(CoffeeContext);
  const [show, setShow] = useState(false);
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Cities</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{ marginRight: 40, marginBottom: 10 }}
          onClick={() => setShow(true)}
          variant="outline-primary"
        >
          <AddIcon /> Add city
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Name Of City</th>
            <th style={{ width: "18%" }}> image</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <CityRow key={city._id} city={city} />
          ))}
        </tbody>
      </Table>
      <CityAddModle show={show} setShow={setShow} />
    </>
  );
}

export default Cities;
