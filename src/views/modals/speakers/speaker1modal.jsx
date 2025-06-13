import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker1Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker01" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Clement Wong</strong> is Head of Solutions Architect & COE at Cloudflare
          APAC, leading technical strategy to secure and optimize digital
          transformation. With expertise in multi-cloud security and
          architecture, he helps enterprises build resilient systems. Previously
          at VMware, he drove multi-cloud adoption as Director of Solutions
          Architecture. A sought-after speaker on cloud and security trends.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker1Modal;