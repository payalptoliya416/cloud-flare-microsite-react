import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker11Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker11" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p>Solution Consultant specializing in cybersecurity and SASE
            solutions at a leading systems integrator in Thailand. Experienced in
            designing secure and scalable architectures for enterprise clients.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker11Modal;