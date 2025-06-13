import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract9Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div class="title">
                      <p>Set against the backdrop of Southeast Asia's digital leap and Al
                maturity curve, this session will dive into how financial institutions
                can embrace a Security Resilience-aligned, Al-enhanced
                architecture to:</p>
                      
                      <p class="mt-3">-Strengthen security perimeter to boost cyber resilience against
                DDoS, bot attacks, and emerging Al-powered threats</p>
  
                      <p class="mt-1">Optimize applications performance and ensure fast, secure
                   customer access</p>
  
                      <p class="mt-3">Extend security to the edge to support real-time banking
                        experiences and open ecosystems</p>
  
                  </div>
      </Modal.Body>
    </Modal>
  );
}

export default Abstract9Modal;