import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import CoffeeContext from "../utils/CoffeeContext";

function CoffeeDeleteModal(props) {
  const { deleteCoffee } = useContext(CoffeeContext);
  const { show, setShow, coffeeId } = props;
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete coffeeShop</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this coffeeShop ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCoffee(coffeeId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CoffeeDeleteModal;
