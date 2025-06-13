import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Builder1Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="builder-popup-one" className='agenda-model' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="title">
                        <p>APIs are the backbone of modern applications, but they also
              introduce new security risks. This session introduces the
              fundamentals of API security and explains how Cloudflare helps
              protect APIs from common threats like unauthorized access and
              data leaks.</p>
                    </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Builder1Modal;