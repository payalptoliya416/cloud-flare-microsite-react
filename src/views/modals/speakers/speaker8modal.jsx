import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker8Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker08" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong> Saikrishna Chavali </strong>crafts stories and executes go-to-market 
              strategies to simplify the work of infosec, sales, and product 
              teams. At Cloudflare, he drives Application Security awareness 
              and revenue. Formerly at Proofpoint and ObserveIT, he 
              advanced cloud security marketing and grew the insider threat 
              category, with a history of marketing success.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker8Modal;