import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Abstract9Modal({show , handleClose}) {

  return (
   <Modal show={show} id="popup-two" className='agenda-model' onHide={()=>handleClose(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <div class="title">
                      <p>As cyber threats escalate in complexity and scale, traditional
                        Security Operations Centers (SOCs) are struggling to keep up.
                        Manual threat detection, fragmented tooling, and alert fatigue
                        hinder security teams from responding effectively. AI-native SOCS
                        are revolutionizing cybersecurity operations by delivering real-time
                        intelligence, automation, and predictive defense
                        mechanisms—enabling organizations to stay ahead of evolving
                        threats.</p>
                      
                      <p class="mt-3">Why Legacy SOCS Are No Longer Enough</p>
  
                      <p class="mt-1"><strong>- Threat Volume Overload </strong> - Security teams are overwhelmed with
                        alerts, many of which are false positives, leading to slower
                        response times.</p>
  
                      <p class="mt-3"><strong> - Reactive vs. Proactive Security </strong>- Traditional SOCS rely on
                        human-driven investigations, making threat detection reactive
                        rather than predictive.</p>

                      <p class="mt-3"><strong> - Tool Fragmentation </strong> - Disconnected security tools across cloud,
                        network, and endpoint security create blind spots and increase
                        operational complexity.</p>

                      <p class="mt-3">AI-Native SOC: The Future of Cyber Defense.
                        Cloudflare's AI-powered SOC solutions transform security
                        operations by integrating AI-driven detection, automation, and
                        response into a single, cloud-native platform:</p>

                      <p class="mt-3"><strong>- Autonomous Threat Detection </strong> - AI correlates and analyzes
                        billions of signals in real-time, detecting threats before they
                        escalate.</p> 

                      <p class="mt-3"><strong>- Automated Investigation & Response </strong>- AI-driven automation
                        prioritizes incidents, eliminates false positives, and orchestrates
                        rapid containment actions—reducing response times from hours to
                        seconds.</p> 

                      <p class="mt-3"><strong>- End-to-End Visibility </strong> - A unified security platform consolidates
                        network, endpoint, and cloud telemetry, eliminating siloed security.</p> 
                        
                      <p class="mt-3"><strong>- AI-Augmented Security Analysts </strong>- AI-powered
                        recommendations enhance analyst workflows, reducing alert
                        fatigue and improving efficiency.</p> 
                      
                      <p class="mt-3"><strong>- Threat Intelligence at Scale</strong> - Leveraging Cloudflare Radar and
                        global threat insights, SOC teams can predict and mitigate
                        emerging attack trends before they impact the business.</p> 

                      <p class="mt-3">
                        By leveraging AI-driven security automation and cloud-scale threat
                        intelligence, enterprises can transition from legacy SOC models to
                        an AI-native approach—enhancing efficiency, speed, and
                        resilience while ensuring proactive cyber defense in an
                        increasingly AI-driven threat landscape.
                      </p>
  
                  </div>
      </Modal.Body>
    </Modal>
  );
}

export default Abstract9Modal;