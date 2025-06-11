import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker22Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker22" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Nan Hao Maguire</strong> is the Field CTO for Cloudflare in APAC, 
                advising tech leaders on resilient and secure architectures using 
                Cloudflare's global network. Her expertise in enterprise IT, 
                cybersecurity, and digital transformation guides customers in Zero 
                Trust, application modernization, and AI threat mitigation, fostering 
                innovation across the region.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker22Modal;