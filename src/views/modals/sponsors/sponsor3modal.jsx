import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Sponsor3Modal({show , handleClose}) {

  return (
    <>
      <Modal show={show} id="sponsor03" className='sponsor-modal' onHide={()=>handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="sponsor-modal-info">
                            <h3>
                                Sponsor 
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste error sint voluptatum beatae dolorum tempore laborum amet expedita, odit consectetur soluta. Facere recusandae atque similique ratione aliquam delectus, excepturi laborum, error vero tempore voluptas omnis, quam maxime natus praesentium at numquam ullam! Earum ad qui, neque provident culpa velit odio?</p>
                        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sponsor3Modal;