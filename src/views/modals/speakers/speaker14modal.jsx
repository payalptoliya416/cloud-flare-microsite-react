import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker14Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker14" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Calvin </strong> iheads CSA's Cybersecurity Programme Centre, securing 
              strategic systems through secure design and emerging tech like 
              AI, 5G, and blockchain. He co-developed Singaporeʼs 
              cybersecurity R&D hubs and led COVID-19 system assurance, 
              earning the Public Administration Medal (Bronze). Actively involved 
              in social services, he chairs Allkin Singaporeʼs ICT Committee.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker14Modal;