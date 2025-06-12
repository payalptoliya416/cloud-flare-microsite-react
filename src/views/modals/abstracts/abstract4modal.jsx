import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract4Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-four" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div className="title">
                      <p> As Bangkok advances its digital government and <strong>Smart Nation 
                        initiatives</strong>, the rapid convergence of platformization and AI is 
                        redefining how enterprises and public institutions approach 
                        cybersecurity. Traditional security models are being outpaced by 
                        the growing sophistication of cyber threats, requiring a fundamental 
                        shift in cybersecurity strategies to ensure digital trust, resilience, and 
                        regulatory compliance.</p>
                      
                      <p className="mt-3"> This session, led from a GovTech Bangkok perspective, will 
                        explore how AI-driven security frameworks and platform-based 
                        architectures can enhance threat intelligence, automate risk 
                        mitigation, and fortify national cyber defenses. We will discuss:</p>
  
                        <p className="mt-3"><strong>How platformization enables a zero-trust, scalable, and 
                          integrated security</strong> approach across government and enterprise 
                          ecosystems.</p>
  
                        <p className="mt-3"><strong>The impact of AI on cyber risk, </strong>from adversarial AI threats to 
                        AI-powered defense mechanisms.</p>

                        <p className="mt-3"><strong>Real-world strategies for securing digital services,</strong>citizen data, 
                          and critical infrastructure in an AI-powered future.
                          With cyber risks evolving at an unprecedented pace, now is the time 
                          to reset the cybersecurity playbook—leveraging AI, automation, and 
                          platform-driven security to build a resilient and future-proof 
                          cybersecurity framework for Bangkok digital economy.</p>
                  </div>               
      </Modal.Body>
    </Modal>
  );
}

export default Abstract4Modal;