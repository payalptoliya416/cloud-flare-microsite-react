import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker7Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker07" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Sze Rong </strong> is a Solutions Engineer at Cloudflare, driving 
                cybersecurity adoption in Singapore and Indonesia. With prior 
                experience at Microsoft and Salesforce, he excels at enhancing 
                customer engagement and business outcomes via data-driven 
                solutions. Specializing in Cloudflare's connectivity cloud, Sze Rong 
                translates complex challenges into clear solutions and is passionate 
                about educating the industry.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker7Modal;