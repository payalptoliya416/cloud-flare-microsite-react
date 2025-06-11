import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract7Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div class="title">
                        <p>As enterprises move away from traditional VPNs, the journey to
                          Zero Trust adoption can be complex—whether you're just starting
                          or stuck mid-rollout. In this session, learn from real-world customer
                          experiences on how to successfully <strong>modernize remote access,</strong>
                          tackle implementation challenges, and accelerate your Zero Trust
                          transformation. We'll showcase how organizations can deploy
                          <strong>Next-Gen Firewalls and SASE </strong>as part of a comprehensive Zero
                          Trust Architecture, integrating identity-driven access controls,
                          AI-enhanced security policies, and cloud-based enforcement to
                          secure remote workforces. Additionally, we'll explore the broader
                          role of <strong>NIST frameworks </strong>in driving industry-leading cybersecurity
                          best practices, helping businesses fast-track Zero Trust adoption
                          with confidence.</p>
                        
                        <p class="mt-3">Key takeaways:</p>
    
                        <p class="mt-3"><strong>- Practical strategies </strong> to overcome VPN migration roadblocks.</p>
    
                        <p class="mt-3"><strong>- Best practices </strong> integrating SASE & Next-Gen Firewalls into
                          Zero Trust.</p>
    
                        <p class="mt-3"><strong> - Real-world insights </strong> from enterprises accelerating their security
                          transformation.</p>

                        <p class="mt-3">Join us and gain actionable insights on securing remote access at
                          scale—without compromising performance, user experience, or
                          security.</p>
                    </div>    
      </Modal.Body>
    </Modal>
  );
}

export default Abstract7Modal;