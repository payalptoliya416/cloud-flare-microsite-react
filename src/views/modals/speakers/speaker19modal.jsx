import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker19Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker19" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p> <strong> Alex</strong>leads Cloudflareʼs DDoS Mitigation team, with 10+ years in
            distributed systems and network security. He authored 20% of the
            teamʼs core stack, scaling defenses against major attacks. A
            technical expert and mentor, he specializes in building resilient
            systems and empowering engineering teams.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker19Modal;