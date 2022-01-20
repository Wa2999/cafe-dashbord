import { Button, ListGroup, Modal } from "react-bootstrap";

function CoffeeViewModal(props) {
  const { show, setShow, coffee } = props;
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View CoffeeShop</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Name of CoffeeShop:</strong> {coffee.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Image:</strong>
            <img
              src={coffee.image}
              style={{ objectFit: "contain", height: "200px", width: "100%" }}
            />
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CoffeeViewModal;
