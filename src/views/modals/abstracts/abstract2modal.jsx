import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract2Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="title">
            <p> The AI-Powered Era Is Here: Race to Digital Resilience in 
            Multimodal AI: Race to Digital Resilience in Multimodal AI.</p>
            
            <p className="mt-3"> AI is rapidly evolving beyond text-based models into multimodal 
              intelligence—integrating vision, speech, and contextual reasoning 
              to revolutionize how businesses and governments operate. As 
              ASEAN accelerates its digital transformation, the ability to secure, 
              scale, and govern AI-powered systems will be critical in building 
              cyber resilience against emerging threats.</p>

                <p className="mt-3"> Join us as we explore:</p>

                <p className="mt-3"><strong> - Beyond RAG, The Rise of Multimodal AI: </strong> How AI advancements 
                    in vision, speech, and context are reshaping digital interactions.</p>

                <p className="mt-3"><strong> - AI in Action: </strong>  Demo on real-world AI use cases in finance & 
                  government.</p>

                <p className="mt-3"><strong> - AI + Security: </strong>  What are the top 3 risks in trust, security and 
                  compliance in deploying AI-driven enterprise solutions.</p>

                <p className="mt-3"><strong> - Scaling AI for Business Impact: </strong> Strategies for organizations to 
                  integrate multimodal AI while maintaining performance and reliability.</p>

                <p className="mt-3">As the quantum era approaches, the convergence of AI, 
                  cybersecurity, and trust frameworks will define the next frontier of 
                  digital resilience. Join us to explore how enterprises and 
                  governments can stay ahead in this rapidly shifting landscape.</p>
        </div>
            
                            
      </Modal.Body>
    </Modal>
  );
}

export default Abstract2Modal;