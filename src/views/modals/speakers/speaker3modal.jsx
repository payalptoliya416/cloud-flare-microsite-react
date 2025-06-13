import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker3Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker03" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Harman Nagra </strong> leads Cloudflareʼs APJC Specialist & Architecture
        pre-sales team. With 20+ years in IT, Harman excels in leadership,
        network/security architecture, and pre-sales. Holding a master's
        from Charles Sturt University and multiple certifications, Harman
        has worked at Palo Alto Networks, VMware, and Fortinet.
        Passionate about cybersecurity, Harman has been at Cloudflare
        for 3 years.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker3Modal;