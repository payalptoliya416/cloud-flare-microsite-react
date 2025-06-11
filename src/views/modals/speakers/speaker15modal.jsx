import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker15Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker15" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Dennis Goh</strong> is a Principal Network Services Specialist at 
              Cloudflare with 16 years of experience in Network, Security, and 
              Datacenter Solutions, including 8 years collaborating with 
              customers and cloud providers across Asia Pacific and Japan to 
              enhance network and security infrastructure. He is passionate 
              about helping businesses design strategies that drive efficiency, 
              resilience, and success. 
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker15Modal;