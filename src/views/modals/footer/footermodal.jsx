import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { QRCode } from 'react-qrcode-logo';
import { getPassport } from '../../../utils/gaia';


function FooterModal({show , handleClose, queue}) {

  return (
    <>
      <Modal show={show} id="footer-one" className='footer-scanner-modal' onHide={()=>handleClose(false)} centered>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-top-info">
                    <div className="modal-close-btn">
                        <button type="button" className="btn-close" onClick={()=>handleClose(false)} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="footer-qr-info">
                          <h3>My QR Code</h3>
                          <QRCode value={getPassport() ?? ""}  size={180} style={{ margin : "auto", display : "block"}}   />
                      </div>
                    </div>
                </div>
                {queue == null && <div className="modal-bottom-info">
                    <button className="btn">AI Mixology</button>
                    <p>Visit the AI Mixologist booth, <br/> where your
                    perfect drink is <br/> determined by AI</p>
                </div>}
                {queue != null && <div className="modal-bottom-info">
                    <button className="btn">AI Mixology</button>
                    <h2>Order Number: {queue.toString().padStart(3, '0')}</h2>
                </div>}
            </div>
        </div>
      </Modal>
    </>
  );
}

export default FooterModal;