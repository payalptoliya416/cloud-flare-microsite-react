import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker4Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker04" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Jeremy Jorrot </strong>is Cloudflareʼs SASE Specialist for ASEAN, driving 
              the Cloudflare One offering. With 10+ years in cybersecurity and 
              cloud infrastructure, he combines expertise, creativity, and a 
              passion for innovation. His experience in network security and 
              global exposure fuels Cloudflareʼs vision for a secure, connected 
              future through continuous learning and excellence.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker4Modal;