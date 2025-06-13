import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract7Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div class="title">
                        <p>Managing contractor access through traditional VPNs often leads
              to excessive privileges, slow onboarding, and limited visibility. In
              this session, weʼll focus on how security and infrastructure teams
              are using Cloudflare Zero Trust to deliver secure, scalable, and
              auditable access for contractors—without granting full network
              connectivity or maintaining complex segmentation rules.</p>
                        
                        <p class="mt-3">Youʼll hear how organizations are implementing Cloudflare Access
              to enforce identity-aware, session-based access to internal
              applications, tools, and environments. We'll discuss real-world use
              cases involving time-bound access, device posture checks,
              step-up authentication, and activity logging—ensuring contractors
              only access what they need, when they need it</p>
    
                        <p class="mt-3">We'll also cover how teams integrate Cloudflare with their identity
                    providers and existing security stack to automate
                    onboarding/offboarding, meet compliance requirements, and
                    reduce operational overhead</p>
    
                  <p class="mt-3">Key takeaways:</p>
    
                   <p class="mt-3">Contractor-specific access controls with Cloudflare Access</p>

                   <p class="mt-3">Enforcing least-privilege access without network-level connectivity</p>
                   <p className='mt-3'>Practical use cases: time-limited access, device enforcement, and session logging</p>
                <p className='mt-3'>Lessons from real deployments securing third-party access at scale</p>
                <p className="mt-3">Join us to learn how technical teams are modernizing contractor
            access with Cloudflare Zero Trust—simplifying operations while
            strengthening security posture.
            </p>  
                    </div>    
      </Modal.Body>
    </Modal>
  );
}

export default Abstract7Modal;