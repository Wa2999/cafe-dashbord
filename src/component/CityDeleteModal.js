import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import CoffeeContext from "../utils/CoffeeContext";

function CityDeleteModal(props) {
  const { deleteCity } = useContext(CoffeeContext);
  const { show, setShow, cityId } = props;
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete city</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this city ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCity(cityId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CityDeleteModal;
