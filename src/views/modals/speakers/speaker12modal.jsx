import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker12Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker12" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong> Claire Lim </strong>is a Specialist Solutions Engineer at Cloudflare, 
              enhancing ASEAN Enterprise and Public Sector cybersecurity. 
              With experience at Meltwater and Salesforce, she drives customer 
              success through data visibility and innovative solutions. At 
              Cloudflare, she translates complex security challenges into 
              comprehensive strategies. Passionate about education, she 
              empowers audiences to engage with industry innovations.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker12Modal;