import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker6Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker06" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong> Ayush Verma </strong>leads Cloudflare's Solutions Engineering for 
              Southeast Asia  & Korea, driving cloud innovation and partnerships. 
              A cybersecurity expert with a Master's in InfoComm Security, he 
              specializes in Zero Trust and network security. An accomplished 
              speaker and team leader, his prior roles at NCS and Singtel 
              strengthened Singapore's public sector security infrastructure.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker6Modal;