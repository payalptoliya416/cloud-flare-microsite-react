import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Sponsor2Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="sponsor02" className='sponsor-modal' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
                        <h3>
                            MCI (Master Concept)
                        </h3>
                    <p>Master Concept is the ASDP of Application and Zero Trust Security. 
                        We deliver a comprehensive range of security services and operate 
                        as both an MSP and MSSP. With over 20 years of experience, we 
                        provide end-to-end tech advisory solutions to help clients establish 
                        the best security environment for their systems.</p>
                    </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sponsor2Modal;