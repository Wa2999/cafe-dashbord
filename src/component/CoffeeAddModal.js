import { useContext } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import CoffeeContext from "../utils/CoffeeContext";

function CityAddModal(props) {
  const { show, setShow } = props;
  const { addCoffee } = useContext(CoffeeContext);
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addCoffee}>
        <Modal.Header closeButton>
          <Modal.Title>Add Coffee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name Of Coffee
            </Form.Label>
            <Col md="8">
              <Form.Control name="name" type="text" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => setShow(false)}
          >
            Add CoffeShop
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CityAddModal;
