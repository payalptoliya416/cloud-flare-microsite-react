import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker17Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker17" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Leela Kanakala</strong>is a Regional Senior Solutions Specialist with deep
              expertise in ASEAN cybersecurity. Specializing in Zero Trust, cloud
              security, and AI-driven defenses, he designs tailored solutions
              against evolving threats. With experience in Australiaʼs Solutions
              Engineering and Channel Sales, he helps enterprises build resilient
              security frameworks aligned with business goals.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker17Modal;