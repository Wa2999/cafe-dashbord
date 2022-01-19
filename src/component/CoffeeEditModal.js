import { useContext } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import CoffeeContext from "../utils/CoffeeContext";

function CityEditModal(props) {
  const { show, setShow, coffee } = props;
  const { editCoffee } = useContext(CoffeeContext);
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={(e) => editCoffee(e, coffee._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit coffee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              name of coffeeShop
            </Form.Label>
            <Col md="8">
              <Form.Control
                type="text"
                name="name"
                defaultValue={coffee.name}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              image
            </Form.Label>
            <Col md="8">
              <Form.Control
                type="url"
                name="image"
                defaultValue={coffee.image}
                required
              />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant="success"
            type="submit"
            onClick={() => setShow(false)}
          >
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CityEditModal;
