import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Builder2Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="builder-popup2" className='agenda-model' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="title">
            <p>Unify your enterprise with Cloudflare One's secure global network
            seamlessly integrating with all your application services for
            unparalleled performance and protection.</p>
             </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Builder2Modal;