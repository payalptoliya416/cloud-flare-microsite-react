import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker9Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker09" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Kritsada</strong> is AVP of Sales and Marketing at SoftDe'but, leading
            go-to-market strategies across security, performance, and edge
            solutions. Kritsada bridges technical value and business outcomes.
            aHe is key in driving Cloudflare's business, customer success,
            and scaling revenue in todayʼs fast-evolving internet infrastructure
            landscape.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker9Modal;