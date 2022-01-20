import { useContext } from "react";
import { Button, Col, Form, Modal, Row, Image } from "react-bootstrap";
import CoffeeContext from "../utils/CoffeeContext";

function CityAddModal(props) {
  const { show, setShow } = props;
  const { addCity, coffees } = useContext(CoffeeContext);
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addCity}>
        <Modal.Header closeButton>
          <Modal.Title>Add City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name Of City
            </Form.Label>
            <Col md="8">
              <Form.Control name="nameOfCity" type="text" required />
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
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              CoffeeShopes
            </Form.Label>
            <Col md="8">
              {coffees.map((coffeeObject) => (
                <Row>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="coffeeshopes"
                      value={coffeeObject._id}
                    />
                  </Col>
                  <Col md="2">
                    <Image
                      src={coffeeObject.image}
                      roundedCircle
                      height={50}
                      width={50}
                      style={{ objectFit: "cover" }}
                    />
                    <span>{coffeeObject.name}</span>
                  </Col>
                </Row>
              ))}
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
            Add City
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CityAddModal;
