import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalSwiper from '../modal-swiper/modal-swiper';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ModalSwiper />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Inchide</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal


