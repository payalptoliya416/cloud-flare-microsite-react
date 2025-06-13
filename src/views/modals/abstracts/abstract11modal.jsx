import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract11Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div class="title">
                     <p>When a DDoS attack hits, itʼs not just bandwidth that gets
                flooded—itʼs your team, your infrastructure, and your reputation.
                This session walks through what itʼs really like to be on the receiving
                end of a massive DDoS campaign, the complex and layered
                response it takes to stay online, and why building that capability
                in-house is a losing battle for most. If uptime matters to your
                business, choosing the right DDoS mitigation partner isnʼt optional
                - itʼs essential. Weʼll break down what to look for in a provider,
                common pitfalls, and how to pressure-test if theyʼre battle-ready</p>  
                  </div>
      </Modal.Body>
    </Modal>
  );
}

export default Abstract11Modal;