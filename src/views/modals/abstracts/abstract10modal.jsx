import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract10Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div class="title">
                      <p> In highly regulated industries such as
                          <strong>Public Sector, Banking &
                          Financial Services, and Healthcare</strong>
                          , resilience and uptime are
                          non-negotiable. However, achieving high availability, security, and
                          performance in a multi-vendor, multi-cloud environment presents
                          unique challenges—ranging from interoperability concerns to
                          managing diverse security postures.</p>
                      
                      <p class="mt-3">Join Cloudflareʼs experts at Immerse as we unpack real-world
                multi-vendor architectures and demonstrate how Cloudflare
                Application Services seamlessly integrate into diverse technology
                stacks to drive resilience, performance, and compliance.</p>
  
                      <p class="mt-1">Key Takeaways:</p>
  
                      <p class="mt-3"><strong> - Multi-Vendor Architectures for Enterprise Resilience </strong>- Explore
                      how leading organizations design redundancy and failover
                      strategies using a multi-cloud, multi-CDN, and multi-security
                      vendor approach.</p>

                      <p class="mt-3"><strong> - Enhancing Performance Across Distributed Environments </strong> - Learn how Cloudflareʼs intelligent traffic steering, dynamic load
                    balancing, and adaptive routing ensure optimal application
                    performance across AWS, Azure, GCP, and on-prem environments</p>

                      <p class="mt-3"><strong>- Security Without Silos</strong>- Discover how Cloudflareʼs API Gateway,
                    DDoS protection, and Web Application Firewall (WAF) integrate with
                    third-party security solutions to enhance threat detection and
                    response without vendor lock-in.</p> 

                      <p class="mt-3"><strong>- Optimizing Cost and Latency at Scale</strong>- See how organizations
                      reduce infrastructure costs while improving speed and reliability
                      through Cloudflareʼs smart caching, global edge network, and
                      Anycast architecture</p> 

                      <p class="mt-3"><strong>- Case Studies from Regulated Industries</strong>- Gain insights into how
                    public sector agencies, financial institutions, and healthcare
                    organizations are leveraging multi-vendor strategies to meet
                    compliance, security, and uptime demands.</p> 

                      <p className="mt-3">Whether youʼre looking to future-proof your IT strategy, enhance
                  redundancy, or optimize multi-cloud deployments, this session will
                  provide a blueprint for success. Join us at Immerse to explore how
                  Cloudflare empowers enterprises to maximize reliability and uptime
                  without compromising security or agility</p>
  
                  </div>
      </Modal.Body>
    </Modal>
  );
}

export default Abstract10Modal;