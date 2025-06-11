import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker16Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker16" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Tommy Wong  </strong> is a cybersecurity practitioner and thought leader 
              with deep expertise in banking. He co-founded SherpaSec, a 
              Malaysian cybersecurity NGO focused on community building and 
              knowledge sharing. Tommy specializes in securing cloud-native 
              digital banks and bridging cyber resilience with modern 
              microservices-based digital banking architectures.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker16Modal;