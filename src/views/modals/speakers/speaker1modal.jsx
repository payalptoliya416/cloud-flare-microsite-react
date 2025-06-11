import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker1Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker01" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Goran Risticevic</strong> VP of APAC at Cloudflare, brings 20+ years of 
                leadership from AWS, IBM, and NetApp. Based in Sydney since 
                joining in 2022, he leads Customer Success and Services, 
                supporting APAC's digital economies. He empowers organizations 
                to navigate cyber threats and accelerate secure digital 
                transformation across Cloudflare's extensive regional network.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker1Modal;