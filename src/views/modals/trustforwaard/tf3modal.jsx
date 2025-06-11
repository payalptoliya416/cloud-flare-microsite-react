import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Trust3Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="trust-popup-3" className='agenda-model' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="title">
            <p>Explore how public sector & enterprises strategies are evolving to 
            address AI-powered threats and the new digital battlefield. This 
            session brings together government, enterprises, critical 
            infrastructure, and technology leaders to discuss proactive 
            measures and real-world frameworks for building cyber resilience.</p>
        </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Trust3Modal;