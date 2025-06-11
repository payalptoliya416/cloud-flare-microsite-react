import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker19Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker19" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p> Based in Singapore, <strong>Ben Munroe</strong>, VP of APAC Field Marketing at 
              Cloudflare, brings 20+ years of global marketing experience from 
              roles including Cisco. He crafts impactful marketing strategies, 
              connecting innovation to customer results across the diverse APAC 
              region, driving growth, engagement, and Cloudflare's brand 
              presence through compelling storytelling.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker19Modal;