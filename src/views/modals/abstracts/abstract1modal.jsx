import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract1Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="popup-one" className='agenda-model' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="title">
          <p>In this opening keynote, a Cloudflare executive will unveil how
          the Connectivity Cloud empowers businesses to connect,
          protect, and build everywhere:</p>
          
          <p className="mt-3"><strong>Connect </strong>- Regain visibility and control across on-prem, public
          cloud, SaaS, and the Internet.</p>

          <p className="mt-3"><strong>Protect —</strong> Strengthen security while reducing attack surfaces,
              vendor complexity, and tool sprawl.</p>

              <p className="mt-3"> <strong>Build Everywhere</strong> — Accelerate innovation, automation, and
              modernization for agility and growth.</p>

              <p className="mt-3">Join this session to gain real-world insights, groundbreaking
                  innovations, and strategic takeaways to future-proof your digital
                  ecosystem across ASEAN and beyond.</p>
        </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Abstract1Modal;