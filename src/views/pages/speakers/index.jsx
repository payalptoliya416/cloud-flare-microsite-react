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
import Speaker23Modal from "../../modals/speakers/speaker23modal";

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
    const [speaker23Visible, setSpeaker23Visible] = useState(false);
  
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
                                        <img src="/assets/image/user1.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>AVM Amorn <br/> Chomchoey</h3>
                                            <p>Secretary General,<br/>NCSA Thailand </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker6Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user2.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Alex Forster</h3>
                                            <p> Head of Engineering, <br/>DDoS Mitigation,<br/> Cloudflare Inc. </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker19Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
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
                                            <h3> Amirul Zharfan <br/> Zalid </h3>
                                            <p>Technical <br/> Validation Engineer,<br/> Cloudflare</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker14Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
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
                                            <h3>Anh Luu </h3>
                                            <p>Regional Solutions Engineer,<br/>Cloudflare Philippines <br/>and Vietnam </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker12Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user5.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3 className="custm-h3">Assoc. Prof. Cherdchai <br/>Nopmaneejumruslers,</h3>
                                            <p>Senior ProductM.D. Vice President for <br/> Information Technology<br/>and Digital Transformation, <br/>Mahidol University </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker5Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user6.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Ayush Verma</h3>
                                            <p> Head of Solutions <br/>Engineering<br/>Cloudflare ASEAN </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker15Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
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
                                            <h3>Bodeethorn <br/>Sirakantarat </h3>
                                            <p>Senior Associate <br/>Technical Architect, <br/>NTT Data Thailand</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker11Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
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
                                            <h3>Chatchawat <br/>Asawarakwong</h3>
                                            <p>Vice Chairman <br/> and Group CISO, <br/>KASIKORN <br/>Business-Technology Group </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker20Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
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
                                            <h3>Clement Wong</h3>
                                            <p>Head of Centre of <br/> Excellence (CoE), <br/>Cloudflare APAC</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker1Visible(true)} className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
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
                                            <h3>Dennis Goh</h3>
                                            <p>Principal Specialist Solutions <br/> Engineer, Networking, <br/>Cloudflare APJC</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker21Visible(true)} className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
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
                                            <h3>Harman Nagra</h3>
                                            <p>Senior Manager,<br/> Solutions Engineering, <br/>Cloudflare APAC</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker3Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
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
                                        <img src="/assets/image/user13.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Kirill Yuzhakov</h3>
                                            <p> Head of IT <br/> Infrastructure Division,<br/>ABA Bank</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker13Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user14.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Kritsada <br/>Kaosumphan </h3>
                                            <p>AVP Sales & Marketing,<br/>SoftDe'but </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker9Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user15.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Nattavut <br/>Meethong</h3>
                                            <p>nForce</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker22Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user16.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Paramet <br/>Keeratichairitnara</h3>
                                            <p>Country Manager,<br/> Pacific Tech</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker18Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user17.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Parkpoom <br/>Pornpratanwech</h3>
                                            <p>Senior Associate <br/>Technical Architect,<br/>NTT Data Thailand</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker10Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user18.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Leela Kanakala</h3>
                                            <p>Regional Senior <br/> Solutions Specialist, <br/>Cloudflare</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker17Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user19.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Pichavee <br/> Voraphatphokin</h3>
                                            <p>Regional Sales Director, <br/>Cloudflare Thailand, <br/>Philippines and Indochina </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker8Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user20.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Pongpisit <br/>Laosuwanwat </h3>
                                            <p>Senior Solutions Engineer,<br/> Cloudflare Thailand </p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker7Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user22.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Siwat Tantikul</h3>
                                            <p>Senior Solutions Engineer,<br/>Cloudflare Thailand</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker16Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
                
                            <div className="col-4 mb-4">
                                <div className="speaker-detail show-modal-overlay">
                                    <div className="speaker-user">
                                        <img src="/assets/image/user23.png" alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <div>
                                            <h3>Wichai Sirirat</h3>
                                            <p>Assistant Chief<br/>Security Officer,<br/>GoSoft & CPALL Group</p>
                                        </div>
                                        <button type="button" onClick={()=>setSpeaker23Visible(true)}  className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                </div>
                            </div>
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
        {speaker23Visible && <Speaker23Modal show={speaker23Visible} handleClose={setSpeaker23Visible} />}
        <Footer page="" />
    </div>
    )
}

export default Speakers;