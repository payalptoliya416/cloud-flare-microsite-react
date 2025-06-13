import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker18Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker18" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Mr. Paramet Keeratichalritnara</strong> the visionary Country Manager
          for Thalland, stands at the forefront of driving cutting-edge
          cybersecurity innovation in the Thai market. With unmatched
          expertise and strategle leadership, he is a key force shaping the
          future of digital security In the region.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker18Modal;