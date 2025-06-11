import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker21Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker21" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Ivan Lim</strong> is a Sales Engineer at CrowdStrike with three years of 
            experience helping organizations in several South East Asian 
            countries stop breaches. Drawing from his comprehensive 
            understanding of modern security challenges, he will introduce how 
            CrowdStrikeʼs Next-Generation SIEM is transforming traditional 
            security operations, making them more efficient and effective for 
            today's threat landscape.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker21Modal;