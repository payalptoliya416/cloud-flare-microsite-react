import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker10Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker10" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p>Solution consultant specializing in cybersecurity and Cloudflare
            solutions at a leading SI company in Thailand. Experienced in
            designing secure, scalable architectures for clients.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker10Modal;