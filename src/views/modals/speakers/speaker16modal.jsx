import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker16Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker16" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Siwat Tantikul </strong> is a seasoned cloud and infrastructure expert with
            20+ years of experience in digital transformation, cloud adoption,
            and networking. As a Senior Solutions Engineer at Cloudflare, he
            helps enterprises modernize IT for scalability and security.
            Previously at Google Cloud, Cisco, and True Corporation, he
            specializes in AI-driven infrastructure, SDN, and edge computing.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker16Modal;