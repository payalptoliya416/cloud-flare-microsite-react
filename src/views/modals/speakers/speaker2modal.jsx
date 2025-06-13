import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker2Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker02" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Kenneth Lai,</strong>VP of ASEAN at Cloudflare, drives digital
            transformation for enterprises and governments. His diverse
            background in tech and sales fuels his leadership in modernizing
            infrastructure, securing digital assets, and leveraging Cloudflare's
            AI-powered Connectivity Cloud. A respected voice, he shapes
            cybersecurity, performance, and innovation across the ASEAN
            tech landscape.
              </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker2Modal;