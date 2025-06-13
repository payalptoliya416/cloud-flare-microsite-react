import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker14Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker14" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Amirul Zharfan Zalid </strong> is a Technical Validation Engineer at
        Cloudflare, blending 8+ years of software expertise with strategic
        presales skills. He specializes in crafting impactful POCs and demos,
        translating complex tech into business value. Passionate about AI
        and serverless solutions, he automates workflows and leverages
        Cloudflareʼs ecosystem to drive innovation for global clients
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker14Modal;