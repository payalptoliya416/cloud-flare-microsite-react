import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker13Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker13" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong> Kevin Ng </strong> is a global tech leader with 20+ years' experience 
              building products and engineering teams.He holds First Class 
              Honours and MSc in Computer Science from NUS.As GovTech's 
              Senior Director of Core Engineering Products, he drives GCC, SGTS 
              and GDP initiatives including SHIP-HATS. Formerly at Expedia, he 
              transformed systems into cloud-native AI platforms.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker13Modal;