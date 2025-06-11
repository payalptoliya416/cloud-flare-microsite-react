import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract6Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div class="title">
                        <p>What does it mean for an application to be "modern" in 2025? As
                          enterprises accelerate digital transformation, the need to
                          modernize applications for performance, scalability, and security is
                          more critical than ever.</p>
                        
                        <p class="mt-3">Join us for an in-depth discussion on the three key approaches to
                          app modernization—Rehost, Replatform, and Refactor—and
                          explore how Cloudflare's developer-first platform can help you:</p>
  
                        <p class="mt-3"><strong>- Rehost: </strong> Seamlessly migrate apps to the cloud with minimal
                          changes.</p>

                        <p class="mt-3"><strong> - Replatform:</strong> Optimize applications with cloud-native capabilities
                          for better performance.</p>

                        <p class="mt-3"><strong> - Refactor: </strong> Fully transform apps for microservices, serverless, and
                          edge computing.</p>

                        <p class="mt-3">Discover how Cloudflare's global network, AI-driven security, and
                          full-stack developer platform empower businesses to modernize
                          applications faster, more securely, and with reduced complexity.
                          Join us and unlock the next generation of app
                          modernization—where speed, security, and scalability converge.</p>
                    </div>               
      </Modal.Body>
    </Modal>
  );
}

export default Abstract6Modal;