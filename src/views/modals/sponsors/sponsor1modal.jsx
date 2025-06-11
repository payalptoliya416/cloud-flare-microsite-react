import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Sponsor1Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="sponsor01" className='sponsor-modal' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
                        <h3>
                          First Wave
                        </h3>
                        <p>First Wave is a multicloud solution provider driving digital 
                            transformation across Asia Pacific. We empower enterprises
                            with tailored cloud, security, and observability services—partnering 
                            with Cloudflare and leading tech providers to deliver
                            scalable, secure, and data-driven outcomes.</p>
                    </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sponsor1Modal;