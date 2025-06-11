import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Trust1Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="trust-popup-one" className='agenda-model' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="title">
                        <p> Set the strategic tone for Immerse Singapore by showcasing 
                        Cloudflareʼs vision and leadership in helping organizations 
                        modernize infrastructure, secure their digital assets, and accelerate 
                        innovation in an AI-driven, threat-intensified world. This keynote 
                        serves as the thematic anchor for the entire event.</p>
                    </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Trust1Modal;