import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker5Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker05" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Assoc. Prof. Cherdchai Nopmaneejumruslers, M.D.</strong>is VP for IT
              & Digital Transformation at Mahidol University, driving digital
              integration in healthcare and education. A board-certified
              internist, respiratory/sleep specialist, and EMBA holder, he leads
              Thailandʼs R2R initiative and advises on national health policy,
              HITAP, and NHSO committees, advancing evidence-based
              healthcare innovatio  n.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker5Modal;