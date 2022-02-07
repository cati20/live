import React, {  useState} from 'react'
import { Modal, Button } from 'react-bootstrap';
import BookingForm from '../components/bookings/BookingForm'

function Pop({open}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add an Activity
        </Button>
  
        <Modal show={show} onHide={handleClose} close={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <BookingForm />          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

           
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Pop;