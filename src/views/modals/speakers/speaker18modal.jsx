import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker18Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker18" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Nima Saraf,</strong> has 20+ years of expertise in cybersecurity, cloud
                infrastructure, and AI-driven services. With a customer-first
                approach and deep technical knowledge, he develops intelligent
                tools to enhance digital resilience and operational maturity in
                complex environments.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker18Modal;