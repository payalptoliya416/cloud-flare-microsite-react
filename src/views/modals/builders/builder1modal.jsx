import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Builder1Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="builder-popup-one" className='agenda-model' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="title">
                        <p>In this session, weʼll explore how the integration of Cloudflare with 
                          Sumo Logic empowers organizations to optimize website and 
                          application performance while enhancing security. Learn how to 
                          gain end-to-end visibility into your web traffic with real-time 
                          analytics, detailed event monitoring, and actionable insights. We'll 
                          showcase pre-built Cloudflare dashboards for performance, 
                          security, and reliability metrics, as well as demonstrate how to 
                          combine Cloudflare logs with other data sources for deeper 
                          analysis. Attendees will also discover how easy it is to get started 
                          with the integration and leverage advanced filtering, alerting, and 
                          correlation features to proactively manage your web infrastructure.</p>
                    </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Builder1Modal;