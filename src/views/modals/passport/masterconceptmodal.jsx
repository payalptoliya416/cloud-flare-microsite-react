import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function MasterConceptModal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="checkbox4" className='passport-modal' dialogClassName='modal-dialog-centered check-modal' onHide={()=>handleClose(false)}>
         <Modal.Header>
                <button
                  type="button"
                  className="btn-close btn-close-orange"
                  aria-label="Close"
                  onClick={()=>handleClose(false)}></button>
                </Modal.Header>
        <Modal.Body>
        <div className="checkbox-pop">
            <div className="relative-img">
                <img src="/assets/image/im9.png" alt="" style={{marginBottom:'-20px',maxWidth:'70px'}}/>
            </div>
            <img src="/assets/image/MasterConcept.png" alt="" className="black-img"/>
            <div className="checkbox-info">
                <h3>YIP IN TSOI</h3>
                <div className='pavilion-model-icon'>
                  <img src="/assets/image/location.png" alt="" />
                  <span>Regency Ballroom Foyer </span>
                </div>
                <p className='pavillion-description'>Present your QR code to the booth
                representative to complete this visit.</p>
            </div>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MasterConceptModal;