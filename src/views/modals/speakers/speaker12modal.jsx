import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker12Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker12" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Anh </strong>is a Senior Engineer at Cloudflare Southeast Asia, specializing
            in cybersecurity and cloud computing. With expertise in digital
            transformation, he modernizes enterprise apps, secures networks,
            and optimizes cloud performance. Anh helps organizations
            enhance security with AI-powered solutions across applications,
            networks, and data. His technical leadership makes him a trusted
            advisor in tackling evolving threats.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker12Modal;