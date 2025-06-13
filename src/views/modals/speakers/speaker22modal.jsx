import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker22Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker22" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Nattavut Meethong</strong> is a seasoned Security Consultant at nForce
        Secure Public Company Limited is a leading cybersecurity
        distribution company in Thailand dedicated to providing innovative
        solutions and services.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker22Modal;