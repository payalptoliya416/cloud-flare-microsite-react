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
                            YIP IN TSOI
                        </h3>
                    <p>YIP IN TSOI & CO., LTD. delivers comprehensive high-technology
                      solutions, including cloud modernization, cybersecurity, digital
                      business, data analytics, professional services, and consulting.
                      With a strong track record, we serve diverse industries such as
                      finance, banking, communication, and navigation, helping clients
                      achieve operational excellence and digital transformation
                      across all sectors.</p>
                    </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sponsor2Modal;