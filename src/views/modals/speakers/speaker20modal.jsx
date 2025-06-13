import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker18Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker18" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Chatchawat Asawarakwong </strong>  is Group CISO of KASIKORNBANK
            and Vice Chairman of TB-CERT, with 20+ years in banking
            IT/cybersecurity. Formerly Head of Information Security at a
            regional Thai bank and IT Security Consultant at a Big4 firm in
            Thailand and the U.S. Extensive expertise in security management
            and consulting  
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker18Modal;