import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker6Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker06" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Air Vice Marshal Amorn Chomchoey </strong>is Secretary General of
            Thailandʼs National Cyber Security Agency (NCSA). A cybersecurity
            leader with a Royal Thai Air Force background, he has pioneered
            cyber warfare and national defense initiatives. An alumnus of the
            U.S. Air Force Academy, heʼs a decorated expert, honored with the
            (ISC)² Government Professional Award.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker6Modal;