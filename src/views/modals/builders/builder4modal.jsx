import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Builder4Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="builder-popup-one" className='agenda-model' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="title">
                        <p>Due to the urgent announcement of GDPR and Thailand's PDPA
                        regulations, many organizations are required to complywith these
                        regulations. We've implemented by leveraging Cloudflare Workers,
                        which we can seamlessly implementa dynamic Cookie Consent
                        banner that adheres to privacy regulations without altering the
                        existing website code.</p>
                    </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Builder4Modal;