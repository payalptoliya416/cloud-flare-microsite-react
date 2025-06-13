import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker13Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker13" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p>Experienced IT professional with 20+ years in banking and ISP
            industries. Expertise in infrastructure, network/security
            architecture, system integration, and IT operations. Proven leader
            in complex projects, improving reliability, and aligning IT with
            business objectives. Currently heads IT infrastructure at
            Cambodiaʼs largest bank.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker13Modal;