import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Speaker18Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker18" className='sponsor-modal modal-bottom' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
            <p><strong>Elton Chew</strong>  leads the Solutions Engineering team of Cloudflare 
            across Asia Pacific, Japan and China. His team  owns the charter of 
            helping customers gain accelerated business advantages by 
            leveraging Cloudflareʼs global network and services. Based in 
            Bangkok, Elton has over 25 years of technical services experience 
            in the region.
            </p>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Speaker18Modal;