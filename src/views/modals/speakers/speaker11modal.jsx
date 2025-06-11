import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker11Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker11" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong> Edwin Wong </strong> is a Specialist Solutions Engineer at Cloudflare, 
              specializing in SASE solutions across ASEAN and GCR. With 
              experience supporting businesses of all sizes, he helps 
              organizations enhance security, without compromising on 
              performance or reliability.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker11Modal;