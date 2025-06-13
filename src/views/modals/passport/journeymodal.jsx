import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function JourneyModal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="speaker01" className='gift-modal-info' dialogClassName='modal-dialog-centered' onHide={()=>handleClose(false)}>
        <Modal.Header>
        <button
                  type="button"
                  className="btn-close btn-close-orange"
                  aria-label="Close"
                  onClick={()=>handleClose(false)}></button>
        </Modal.Header>
        <Modal.Body>
        <div className="title">
            <h3 className="modal-title fs-5" id="staticBackdropLabel">Welcome to the</h3>
            <h2>My Cloudflare Journey</h2>

            <h4>A win a lucky draw</h4>
            <p>Complete all 8 booths and youʼll be entered <br/>into our Lucky Draw for exclusive prizes!</p>
            <a href="#"  className="work"><button>HOW IT WORKS </button></a>

            <ul className="popup-list">
                <li>Each booth you visit changes your progress color as you move closer to the final goal.</li>
                    <li>Start with Yellow, and progress through the colors until you hit Orange – the ultimate goal. </li>
                    <li>The more booths you visit, the closer you get to unlocking the prize!</li>
            </ul>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default JourneyModal;