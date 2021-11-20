import React from 'react';
import { useState } from 'react';
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Characterform = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AiFillPlusCircle style={{ fontSize: "40px" }} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title className="bigger-font">Characters</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" />
              <Form.Label className="text1">Paste the url of a JPG or PNG of max 20kb </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select className="mb-3" id="inlineFormCustomSelect">
              <option value="0">Choose...</option>
              <option value="1">Favour Beverly</option>
              <option value="2">Katreen David</option>
              <option value="3">Gold Ainn</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer className= "d-flex w-100">
          <Button className="mx-3 px-2 Han" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  className="mx-3 px-2 Han"variant="primary" onClick={handleClose}>
            Create Character
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Characterform;
