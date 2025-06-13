import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Builder3Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="builder-popup-one" className='agenda-model' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="title">
                        <p>This session introduces the basics of Cloudflare Zero Trust and
                walks through how to onboard users using the WARP client. Learn
                how to register your organization, deploy WARP to devices, and
                enforce secure access policies.</p>
                    </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Builder3Modal;