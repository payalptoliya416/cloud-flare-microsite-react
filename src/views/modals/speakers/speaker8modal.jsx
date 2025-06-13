import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker8Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker08" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong> Pichavee Voraphatphokin </strong>is Cloudflareʼs Regional Sales Director,
            with 20+ years of experience driving sales and operations across
            ASEAN. Specializing in networking, security, and cloud
            transformation, she helps enterprises and governments securely
            innovate. Leveraging Cloudflareʼs AI-powered infrastructure, she
            enables businesses to build a strong security foundation for growth.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker8Modal;