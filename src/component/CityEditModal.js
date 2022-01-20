import { useContext } from "react";
import { Button, Col, Form, Modal, Row,Image } from "react-bootstrap";
import CoffeeContext from "../utils/CoffeeContext";

function CityEditModal(props) {
  const { show, setShow, city } = props;
  const { editCity ,coffees} = useContext(CoffeeContext);
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={(e) => editCity(e, city._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit city</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              name of city
            </Form.Label>
            <Col md="8">
              <Form.Control
                type="text"
                name="nameOfCity"
                defaultValue={city.nameOfCity}
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
                defaultValue={city.image}
                required
              />
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
                defaultValue={coffees.name}
                      value={coffeeObject._id}
                    />
                  </Col>
                  <Col md="2">
                    <Image
                      defaultValue={coffees.image}
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
