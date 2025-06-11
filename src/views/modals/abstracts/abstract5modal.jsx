import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract5Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div class="title">
                        <p>Through live demonstrations, you'll see firsthand how Cloudflare's
                          newest innovations—including <strong>SASE Cloud Platforms, AI Workers,
                          and AI-Driven Security Operations platforms—</strong>are redefining
                          enterprise security by:</p>
                        
                        <p class="mt-3"><strong>- Enhancing data plane resiliency</strong> with a distributed,
                          high-performance architecture that mitigates threats at scale.</p>
    
                          <p class="mt-3"><strong>- Securing the extended enterprise </strong> across cloud, hybrid, and
                            on-prem environments through unified Zero Trust policies.</p>
    
                          <p class="mt-3"><strong> - Revolutionizing Security Operations Centers (SOCs) </strong>with
                            AI-driven automation and real-time analytics to stop threats faster.</p>
    
                          <p class="mt-3"><strong>- Empowering organizations to embrace AI safely,</strong> ensuring
                            security keeps pace with innovation.</p>

                          <p class="mt-3"><strong>- Simplifying cybersecurity through platformization</strong>, reducing
                            operational complexity while improving resilience.</p>

                          <p class="mt-3"><strong>As Cloudflare continues to push the boundaries of network
                            security and resilience</strong>, this session will showcase
                            <strong> game-changing announcements and industry-first capabilities</strong>
                            that enable enterprises to <strong> secure, accelerate, and
                            innovate—without compromise.</strong> Don't just listen—experience the
                            future of cybersecurity in action.</p>
                      </div>                   
      </Modal.Body>
    </Modal>
  );
}

export default Abstract5Modal;