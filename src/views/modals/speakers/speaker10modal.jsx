import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker10Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker10" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Pramod Rane </strong>is a Senior Solutions Engineer at Cloudflare, where 
              he helps organizations architect secure, scalable, and resilient 
              network solution. With deep expertise in Cloud infrastructure and 
              performance optimization, Pramod works closely with clients to 
              enhance their digital environments.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker10Modal;