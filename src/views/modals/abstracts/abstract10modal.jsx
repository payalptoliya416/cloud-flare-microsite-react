import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract10Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div class="title">
                      <p> As enterprises embrace AI-driven digital transformation, traditional 
                        network security approaches are no longer sufficient. AI-driven 
                        applications demand ultra-low latency, high availability, and 
                        real-time security, requiring a modernized firewall strategy that 
                        goes beyond conventional perimeter defenses.</p>
                      
                      <p class="mt-3">In this session, weʼll explore:</p>
  
                      <p class="mt-1"><strong> - The Evolution of Firewalls  </strong>- How AI is redefining firewall 
                        capabilities beyond traditional packet filtering and intrusion 
                        detection.</p>
  
                      <p class="mt-3"><strong> - Adaptive AI-Powered Security </strong>- Leveraging machine 
                        learning-driven threat detection to automatically identify and 
                        mitigate sophisticated attacks.</p>

                      <p class="mt-3"><strong> - Scalability & Performance </strong> - How Cloudflareʼs AI-native firewall 
                        architecture enhances protection without compromising network 
                        speed.</p>

                      <p class="mt-3"><strong>- Zero Trust & SASE Integration</strong> - Embedding firewall security into 
                        a single-vendor SASE architecture for seamless enforcement 
                        across users, apps, and data.</p> 

                      <p class="mt-3"><strong>- Real-World Use Cases </strong>- How leading enterprises are 
                        modernizing their network security strategy to stay ahead of 
                        evolving threats.</p> 


                      <p class="mt-3">
                      Discover how Cloudflareʼs next-gen firewall solutions enable 
                        organizations to modernize network security, safeguard AI 
                        workloads, and accelerate innovation—without complexity.
                      </p>
  
                  </div>
      </Modal.Body>
    </Modal>
  );
}

export default Abstract10Modal;