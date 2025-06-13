import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker7Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker07" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p>With over a decade of experience supporting enterprise digital
          transformation initiatives across the region, he specializes in helping
          organizations modernize their infrastructure through secure,
          high-performance connectivity and intelligent threat protection.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker7Modal;