import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker5Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker05" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>David Liu</strong> is a Senior Product Marketing Manager at Cloudflare, 
                leading GTM for Generative AI solutions. With 9+ years in Gen 
                AI & SaaS marketing, he drives revenue growth through 
                strategic campaigns, digital ads, and cross-functional 
                collaboration. His expertise in B2B strategies has generated 
                $1M+ in under 6 months.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker5Modal;