import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import {destroySession, getToken, } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { Speaker11Modal, Speaker12Modal, Speaker13Modal, Speaker14Modal, Speaker15Modal, Speaker16Modal, Speaker17Modal, Speaker18Modal, Speaker19Modal, Speaker20Modal, Speaker21Modal, Speaker22Modal, Speaker1Modal, Speaker2Modal, Speaker3Modal, Speaker4Modal, Speaker5Modal, Speaker6Modal, Speaker7Modal, Speaker8Modal, Speaker9Modal } from "../../modals/speakers";
import Speaker10Modal from "../../modals/speakers/speaker10modal";

const Speakers = () => {
    const navigate = useNavigate();
    const [speaker1Visible, setSpeaker1Visible] = useState(false);
    const [speaker2Visible, setSpeaker2Visible] = useState(false);
    const [speaker3Visible, setSpeaker3Visible] = useState(false);
    const [speaker4Visible, setSpeaker4Visible] = useState(false);
    const [speaker5Visible, setSpeaker5Visible] = useState(false);
    const [speaker6Visible, setSpeaker6Visible] = useState(false);
    const [speaker7Visible, setSpeaker7Visible] = useState(false);
    const [speaker8Visible, setSpeaker8Visible] = useState(false);
    const [speaker9Visible, setSpeaker9Visible] = useState(false);
    const [speaker10Visible, setSpeaker10Visible] = useState(false);
    const [speaker11Visible, setSpeaker11Visible] = useState(false);
    const [speaker12Visible, setSpeaker12Visible] = useState(false);
    const [speaker13Visible, setSpeaker13Visible] = useState(false);
    const [speaker14Visible, setSpeaker14Visible] = useState(false);
    const [speaker15Visible, setSpeaker15Visible] = useState(false);
    const [speaker16Visible, setSpeaker16Visible] = useState(false);
    const [speaker17Visible, setSpeaker17Visible] = useState(false);
    const [speaker18Visible, setSpeaker18Visible] = useState(false);
    const [speaker19Visible, setSpeaker19Visible] = useState(false);
    const [speaker20Visible, setSpeaker20Visible] = useState(false);
    const [speaker21Visible, setSpeaker21Visible] = useState(false);
    const [speaker22Visible, setSpeaker22Visible] = useState(false);
  
    useEffect(()=>{
        if(getToken() == null){
            destroySession()
            navigate("/login")
        }
    },[])
  


    return (
        <div className="main">
        <section>
            <div className="micro-logo">
                <img src="/assets/image/logosec.png" alt="" className="mx-auto micro-sec"/>
                <div className="back-btn">
                   <a href="/app"><i className="bi bi-chevron-left "></i> Back</a> 
                </div>
            </div>
            <div className="container">
                <div className="speaker-info">
                    <div className="speaker-row">
                        <div className="row">
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Ayush_Verma.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Ayush Verma</h3>
                                            <p>Head of Solutions <br/>Engineering <br/>Southeast Asia, <br/>Cloudflare ASEAN  </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker6Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Ben_Munroe.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Ben Munroe</h3>
                                            <p> Vice President, <br/> APAC Marketing, <br/> Cloudflare </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker19Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Calvin_Min.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3> Calvin Min Yew Ng</h3>
                                            <p>Director (CSPC), <br/> Cyber Security Agency<br/>  of Bangkok (CSA)</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker14Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user12.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Claire Lim  </h3>
                                            <p>Solution Engineer,<br/> Cloudflare ASEAN </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker12Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user5_1.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>David Liu</h3>
                                            <p>Senior Product <br/> Marketing Manager-AI <br/>Cloudflare Inc. </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker5Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Dennis_Goh.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Dennis Goh</h3>
                                            <p> Principal Solutions <br/>Architect, <br/>Cloudflare APAC </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker15Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user11.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Edwin Wong</h3>
                                            <p>Specialist Solutions <br/>Engineer (Zero Trust), <br/>Cloudflare</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker11Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user4.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Elton Chew</h3>
                                            <p>Senior Director, <br/> Solutions Engineering, <br/>Cloudflare APAC </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker20Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user1.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Goran Risticevic</h3>
                                            <p>Vice President, <br/> Cloudflare APAC</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker1Visible(true)} className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Ivan_Lim.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Ivan Lim</h3>
                                            <p>Sales Engineer, <br/> Crowdstrike</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker21Visible(true)} className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user3.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>James Allworth</h3>
                                            <p>Vice President, <br/> Head of Innovation and <br/>Head of Bangkok Office, <br/>Cloudflare Inc. </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker3Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                           
                            </div>
                            {/*<div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Jeremy_Jarrot.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Jeremy Jarrot</h3>
                                            <p> SASE Specialist, <br/>  Cloudflare ASEAN </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker4Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            
                            </div>*/}
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user2.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Kenneth Lai</h3>
                                            <p>Vice President, <br/> Cloudflare ASEAN</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker2Visible(true)} className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Kevin_Ng.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Kevin Ng</h3>
                                            <p> Senior Director <br/> Product and Engineering,<br/> Government Technology <br/> Agency of Bangkok </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker13Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user9.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Leela Kanakala </h3>
                                            <p>Regional Senior<br/>Solutions Specialist, <br/>Cloudflare </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker9Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Nan_Hao_Maguire.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Nan Hao Maguire</h3>
                                            <p>Field CTO,<br/>Cloudflare APAC</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker22Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Nima_Saraf2.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Nima Saraf</h3>
                                            <p>VP Sales and Services,<br/> Pacific Tech</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker18Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user10.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Pramod Rane </h3>
                                            <p>Senior Solutions <br/>Engineer</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker10Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Praveen_john2.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Praveen John Kumar</h3>
                                            <p>Lead Solutions Engineer,<br/> Sumologic | TechDirect</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker17Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user8.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Saikrishna Chavali</h3>
                                            <p>Senior Product <br/>Marketing Manager </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker8Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user7.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Sze Rong Tham </h3>
                                            <p>Solution Engineer, <br/> Cloudflare ASEAN
                                            </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker7Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Tommy_Wong.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Tommy Wong</h3>
                                            <p> Head of Cybersec,<br/>SRE and QA,<br/>Ryt Bank</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker16Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            {/* this */}
                
                            {/* <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/Enrique_Hernandez.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Enrique Hernandez Gonzalez</h3>
                                            <p>Assistant Director,<br/>Cybercrime Operations,<br/>Interpol</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker15Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {speaker1Visible && <Speaker1Modal show={speaker1Visible} handleClose={setSpeaker1Visible} />}
        {speaker2Visible && <Speaker2Modal show={speaker2Visible} handleClose={setSpeaker2Visible} />}
        {speaker3Visible && <Speaker3Modal show={speaker3Visible} handleClose={setSpeaker3Visible} />}
        {speaker4Visible && <Speaker4Modal show={speaker4Visible} handleClose={setSpeaker4Visible} />}
        {speaker5Visible && <Speaker5Modal show={speaker5Visible} handleClose={setSpeaker5Visible} />}
        {speaker6Visible && <Speaker6Modal show={speaker6Visible} handleClose={setSpeaker6Visible} />}
        {speaker7Visible && <Speaker7Modal show={speaker7Visible} handleClose={setSpeaker7Visible} />}
        {speaker8Visible && <Speaker8Modal show={speaker8Visible} handleClose={setSpeaker8Visible} />}
        {speaker9Visible && <Speaker9Modal show={speaker9Visible} handleClose={setSpeaker9Visible} />}
        {speaker10Visible && <Speaker10Modal show={speaker10Visible} handleClose={setSpeaker10Visible} />}
        {speaker11Visible && <Speaker11Modal show={speaker11Visible} handleClose={setSpeaker11Visible} />}
        {speaker12Visible && <Speaker12Modal show={speaker12Visible} handleClose={setSpeaker12Visible} />}
        {speaker13Visible && <Speaker13Modal show={speaker13Visible} handleClose={setSpeaker13Visible} />}
        {speaker14Visible && <Speaker14Modal show={speaker14Visible} handleClose={setSpeaker14Visible} />}
        {speaker15Visible && <Speaker15Modal show={speaker15Visible} handleClose={setSpeaker15Visible} />}
        {speaker16Visible && <Speaker16Modal show={speaker16Visible} handleClose={setSpeaker16Visible} />}
        {speaker17Visible && <Speaker17Modal show={speaker17Visible} handleClose={setSpeaker17Visible} />}
        {speaker18Visible && <Speaker18Modal show={speaker18Visible} handleClose={setSpeaker18Visible} />}
        {speaker19Visible && <Speaker19Modal show={speaker19Visible} handleClose={setSpeaker19Visible} />}
        {speaker20Visible && <Speaker20Modal show={speaker20Visible} handleClose={setSpeaker20Visible} />}
        {speaker21Visible && <Speaker21Modal show={speaker21Visible} handleClose={setSpeaker21Visible} />}
        {speaker22Visible && <Speaker22Modal show={speaker22Visible} handleClose={setSpeaker22Visible} />}
        <Footer page="" />
    </div>
    )
}

export default Speakers;