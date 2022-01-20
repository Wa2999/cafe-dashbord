import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { Table } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
// import UserRow from "../components/UserRow";
// import AdminAddModal from "../components/AdminAddModal";
import CoffeeRow from "../component/CoffeeRow";
import CoffeeAddModle from "../component/CoffeeAddModal";
import CoffeeContext from "../utils/CoffeeContext";

function Coffeeshops() {
  const { coffees } = useContext(CoffeeContext);
  const [show, setShow] = useState(false);
  return (
    <>
      <h1 style={{ marginTop: 10 }}>CoffeeShop</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{ marginRight: 40, marginBottom: 10 }}
          onClick={() => setShow(true)}
          variant="outline-primary"
        >
          <AddIcon /> Add coffeeShop
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
          {coffees.map((coffee) => (
            <CoffeeRow key={coffee._id} coffee={coffee} />
          ))}
        </tbody>
      </Table>
      <CoffeeAddModle show={show} setShow={setShow} />
    </>
  );
}

export default Coffeeshops;
