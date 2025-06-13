import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker23Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker22" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Wichai Sirirat</strong> is Assistant Chief Security Officer (ACSO) at gosoft
            (Thailand) Co., Ltd., managing cybersecurity for CP ALL Group's
            retail network. With 20+ years in IT risk management, he leads
            security strategy, governance, and awareness. Certifications
            include CISSP, CISA, CDPSE, and CC. His expertise helps CP ALL
            navigate evolving digital threats.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker23Modal;