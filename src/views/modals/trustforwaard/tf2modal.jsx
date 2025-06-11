import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Trust2Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="trust-popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="title">
                        <p>This session highlights how Cloudflare is actively securing the 
                        Singapore Government Tech Stack through real-world applications 
                        of AI/ML-driven threat intelligence and DDoS Mitigation Services 
                        (DMS). Through the lens of GVT24009, explore how Cloudflareʼs 
                        capabilities support GovTechʼs mission to enhance resilience 
                        across critical digital infrastructure. The talk will emphasize how 
                        government agencies can leverage threat-aware, scalable security 
                        architecture to protect high-value applications and ensure service 
                        continuity for citizens.</p>
                    </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Trust2Modal;