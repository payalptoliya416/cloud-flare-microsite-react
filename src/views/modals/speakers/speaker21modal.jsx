import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker21Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker21" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Dennis Goh</strong> is a Principal Network Services Specialist at Cloudflare
          with 16 years of experience in Network, Security and Datacenter
          Solutions, including 8 years of collaborating with customers and
          cloud providers across Asia Pacific and Japan to enhance their
          network and security infrastructure. With extensive knowledge in
          architecting and deploying cutting-edge solutions, he is passionate
          about helping businesses design and implement strategies that
          drive efficiency, resilience, and long-term success
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker21Modal;