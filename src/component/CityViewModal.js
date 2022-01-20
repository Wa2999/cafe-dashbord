import { Button, ListGroup, Modal } from "react-bootstrap";

function CityViewModal(props) {
  const { show, setShow, city } = props;
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View City</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Name of city:</strong> {city.nameOfCity}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Image:</strong>
            <img
              src={city.image}
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

export default CityViewModal;
