import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker17Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker17" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Praveen John Kumar,</strong> Lead Solutions Engineer at Sumo Logic, has 
                16+ years of experience driving digital transformation, 
                cybersecurity, AI/ML, and observability initiatives. He excels in 
                bridging strategic vision with technical implementation, specializing 
                in DevOps, cloud technologies, and AI/ML. Praveen empowers 
                organizations to enhance security and operational excellence.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker17Modal;