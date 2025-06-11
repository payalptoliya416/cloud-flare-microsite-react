import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Builder2Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="builder-popup2" className='agenda-model' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="title">
            <p>In this session, Nima introduces InCloudʼs AI-powered Security & 
            Performance Maturity Health Check, built on Cyntra AI,  a 
            cutting-edge intelligence layer within the CloudPulse platform. 
            Designed specifically for Cloudflare Enterprise environments,  the 
            health check goes beyond surface-level analysis to assess 
            architectural maturity, uncover misconfigurations, and identify 
            upsell opportunities. Attendees will get a behind-the-scenes look 
            at how Cyntra AI blends deep technical insight with actionable 
            business outcomes,  enabling teams to optimize for scale, speed, 
            and security, all while aligning with best practices and 
            future-proofing cloud operations.</p>
        </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Builder2Modal;