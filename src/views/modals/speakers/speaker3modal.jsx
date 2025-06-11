import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker3Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker03" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>James Allworth, </strong> Head of Innovation at Cloudare, is a leading 
              strategist and author, known for co-authoring "How Will You Measure 
              Your Life?". 1  He advises on innovation and drives Cloudare's 
              future-focused initiatives for a more secure and resilient internet, 
              helping global organizations navigate the evolving landscape of AI 
              and digital threats.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker3Modal;