import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract3Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-three" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div className="title">
                        <p>In this panel discussion, we will examine the evolution of <strong>AI and
                          cybersecurity</strong> as dual forces—one driving innovation, the other
                          ensuring resilience. AI is redefining the digital landscape,
                          accelerating automation, and enhancing decision-making, yet it
                          also introduces new security risks, from adversarial attacks to
                          AI-powered cyber threats.</p>
                        
                        <p className="mt-3">This session will explore the interplay between AI and
                          cybersecurity, <strong>addressing how cybersecurity both protects and
                          constrains AI, ensuring its safe, responsible, and resilient
                          adoption.</strong> Against the backdrop of Singapore's National AI Strategy
                          2.0, our experts will discuss how organizations can leverage AI to
                          enhance security while mitigating its risks, shaping a secure and
                          adaptive future for enterprises and governmasents alike.</p>

                          <p className="mt-3"><strong>The Shift to a Unified Security Platform, From Network to Cloud,
                            from Apps to AI:</strong> Breaking down silos to enable seamless
                            connectivity and protection across cloud, applications, and AI
                            workloads.</p>

                            <p className="mt-3"> <strong>AI-Powered Threats & Mitigation Strategies:</strong> Addressing the
                              cybersecurity implications of AI, from adversarial machine learning
                              to deepfake attacks.</p>

                            <p className="mt-3"><strong>Future-Proofing Digital Infrastructure:</strong> Building resilient,
                              quantum-ready, and AI-augmented security frameworks to support
                              national digital initiatives.</p>
                              
                            <p className="mt-3"><strong>AI Governance and Security Framework:</strong> Aligning enterprise and
                              government security strategies with robust AI governance
                              principles, ensuring responsible AI adoption, regulatory
                              compliance, and resilience against emerging threats in an AI-driven
                              digital economy.</p>

                            <p className="mt-3">Join us for this thought-provoking discussion on how
                              platformization and AI will define the next era of application,
                              security, and network modernization in Singapore and beyond.</p>
                    </div>               
      </Modal.Body>
    </Modal>
  );
}

export default Abstract3Modal;