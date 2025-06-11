import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getPassport, getToken, hideLoading, loadError, loadSuccess, setToken, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Abstract1Modal from "../../modals/abstracts/abstract1modal";
import Abstract2Modal from "../../modals/abstracts/abstract2modal";
import Abstract3Modal from "../../modals/abstracts/abstract3modal";
import Abstract4Modal from "../../modals/abstracts/abstract4modal";
import Abstract6Modal from "../../modals/abstracts/abstract6modal";
import Abstract7Modal from "../../modals/abstracts/abstract7modal";
import Abstract5Modal from "../../modals/abstracts/abstract5modal";
import Abstract8Modal from "../../modals/abstracts/abstract8modal";
import Abstract9Modal from "../../modals/abstracts/abstract9modal";
import Abstract10Modal from "../../modals/abstracts/abstract10modal";

const Agenda = () => {
    const navigate = useNavigate();
    const [page , setPage] = useState(1);
    const [abstract1Visible, setAbstract1Visible] = useState(false);
    const [abstract2Visible, setAbstract2Visible] = useState(false);
    const [abstract3Visible, setAbstract3Visible] = useState(false);
    const [abstract4Visible, setAbstract4Visible] = useState(false);
    const [abstract5Visible, setAbstract5Visible] = useState(false);
    const [abstract6Visible, setAbstract6Visible] = useState(false);
    const [abstract7Visible, setAbstract7Visible] = useState(false);
    const [abstract8Visible, setAbstract8Visible] = useState(false);
    const [abstract9Visible, setAbstract9Visible] = useState(false);
    const [abstract10Visible, setAbstract10Visible] = useState(false);
  
    useEffect(()=>{
        if(getToken() == null){
            destroySession()
            navigate("/login")
        }
    },[])

    const togglePage = (_page) => {
        if(_page == "p"){
            if(page > 1){setPage(prev => (prev - 1))}
        }else if(_page == "n"){
            if(page < 3){setPage(prev => (prev + 1))}
        }else{
            setPage(_page)
        }
    }

    return (
        <div className="main">
            <section className="login-page">
                <div className="logo">
                    <img src="/assets/image/logo-sin.png" alt="" className="mx-auto logo-sec"/>
                    <div className="back-btn">
                        <a href="/app"><i className="bi bi-chevron-left "></i> Back</a>
                    </div>
                </div>
                <div className="container">
                    <h2><span className="gradiant-text">Agenda </span> </h2>
                    <div className="agenda-detail-section">
                        {page == 1 &&<div className="agenda-deatail">
                            <div className="agenda-box">
                                <div className="clock-div">
                                <img src="/assets/image/Clock.png" alt=""/>
                                <p>8:00 AM - 09:30 AM</p>
                                </div>
                                <p className="desc">Immerse Registration  + Welcome Refreshment  +<br />
                                Immerse Pavilion Tour + Buiders' Sessions</p>
                            </div>

                            <div className="agenda-box">
                            <div className="clock-div">
                                <img src="/assets/image/Clock.png" alt=""/>
                                <p>09:30 AM - 9:40 AM</p>
                            </div>
                            <p className="desc">Opening Video + Emcee Welcome Address</p>
                            </div>

                            <div className="agenda-box">
                            <div className="box-two row">
                                <div className="col-8 pe-0">
                                <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>09:40 AM - 09:45 AM</p></div>
                                <p className="desc">Powering the Future of Application,<br />Security and Network Modernization</p>
                                </div>
                                <div className="col-4"><h6>Kenneth Lai</h6><p>Vice President<br />
                                    Cloudflare ASEAN</p>
                                </div>
                            </div>
                            </div>

                            <div className="agenda-box">
                            <div className="box-two row">
                                <div className="col-8 pe-0">
                                <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>9:45 AM - 10:00 AM</p></div>
                                <p className="desc">Executive Welcome Address:<br />
                                    Welcome to Immerse Singapore 2025</p>
                                </div>
                                <div className="col-4"><h6>Goran Risticevic</h6><p>Vice President,<br />
                                    Cloudflare APAC</p>
                                </div>
                            </div>
                            </div>
                            
                            <div className="agenda-box show-modal-overlay">
                            <div className="box-two row">
                                <div className="col-8 pe-0">
                                <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>10:00 AM - 10:20 AM</p></div>
                                <p className="desc">Cloudflare's 2025 Vision for an<br />
                                    AI-Powered Connectivity Cloud</p>
                                    <button type="button" onClick={()=>setAbstract1Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                </div>
                                <div className="col-4"><h6>James Allworth</h6><p>Vice President,<br />
                                    Head of Innovation and,<br />Head of Singaopre office</p>
                                </div>
                            </div>
                            </div>
                            <div className="agenda-box show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>10:20 AM - 10:50 AM</p></div>
                                    <p className="desc">Platformization & AI: Resetting the<br />
                                        Cybersecurity Playbook for Enterprises</p>
                                    <button type="button" onClick={()=>setAbstract4Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-4"><p><strong> Kevin Ng,<br /></strong>Senior Product<br />
                                    Product and Engineering,<br />
                                    Government Technology<br />
                                    Agency of Singapore<br /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="agenda-box">
                            <div className="clock-div">
                                <img src="/assets/image/Clock.png" alt=""/>
                                <p>10:50 AM - 11:10 AM</p>
                            </div>
                            <p className="desc">Morning Tea Break + Immerse Pavilion Tour +<br />
                                Builders' Sessions</p>
                            </div>
                        

                        </div>}
                        {page == 2 && <div className="agenda-deatail">
                            <div className="agenda-box show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>11:10 AM - 11:50 AM</p></div>
                                    <p className="desc">"Platformization" & AI:<br />
                                        The Dual Forces Shaping the<br />Future of Application, Security<br />and Network Modernization</p>
                                    <button type="button" onClick={()=>setAbstract3Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-4">
                                        <h6>Elton Chew,</h6><p>Senior Director,<br />Solutions Engineering,<br />Cloudflare APAC</p>
                                        <h6>Calvin Ng Min Yew,</h6><p>Director (CSPC),<br />Cyber Security Agency<br />of Singapore (CSA)</p>
                                        <h6>Steven Sim,</h6><p>Head of Cybersecurity Chair,<br />Advisory Committee at OT-ISAC (Operational Technology Information Sharing and Analysis Centre)</p>
                                        <h6>Tommy Wong Choon Khit,</h6><p>Head of Cybersecurity,<br />Head of Cybersecurity, SRE, QA, Ryt Bank (part of YTL Communications)</p>
                                    </div>
                                    
                                </div>
                            </div>
                            {/* <div className="agenda-box show-modal-overlay">
                                <div className="box-two row">
                                    
                                    <div className="col-md-6 pe-0">
                                    <div className="clock-div">
                                        <img src="/assets/image/Clock.png" alt="" />
                                        <p>11:20 AM - 12:00 PM</p>
                                    </div>
                                    <p className="desc">"Platformization" & AI:<br />
                                        The Dual Forces Shaping the<br />Future of Application, Security<br />and Network Modernization
                                    </p>
                                    <button type="button" onClick={() => setAbstract3Visible(true)} className="abstact-btn">
                                        <img src="/assets/image/message.png" alt="" /><span>View Abstract</span>
                                    </button>
                                    </div>

                                    
                                    <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-6">
                                        <h6>Elton Chew,</h6>
                                        <p>Senior Director,<br />
                                            Solutions Engineering,<br />Cloudflare APAC
                                        </p>
                                        </div>
                                        <div className="col-6">
                                        <h6>Calvin Ng Min Yew,</h6>
                                        <p>Director (CSPC),<br />
                                            Cyber Security Agency<br />of Singapore (CSA)
                                        </p>
                                        </div>
                                        <div className="col-6">
                                        <h6>Enrique Hernandez Gonzalez,</h6>
                                        <p>Assistant Director,<br />
                                            Cybercrime Operations,<br />INTERPOL
                                        </p>
                                        </div>
                                        <div className="col-6">
                                        <h6>Tommy Wong Choon Khit,</h6>
                                        <p>Head of Cybersecurity,<br />
                                            SRE, A, Ryt Bank
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div> */}


                            <div className="agenda-box agenda-item  show-modal-overlay">
                                <div className="box-two row">
                                    <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>11:50 AM - 12:30 PM</p></div>
                                    <p className="desc"> The AI-Powered Era Is Here:<br />
                                        Race to Digital Resilience in Multimodal AI<br /></p>
                                        <p className="small-des">
                                        (Demo on real-world AI use cases<br />
                                        in finance & government)
                                        </p>
                                        <button type="button" onClick={()=>setAbstract2Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                        
                                    </div>
                                    <div className="col-4"><p><strong> David</strong> Liu<br />
                                        Senior Product<br />
                                        Marketing Manager<br />
                                        AI, Cloudflare Inc.<br /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="agenda-box show-modal-overlay">
                                <div className="clock-div">
                                <img src="/assets/image/Clock.png" alt=""/>
                                <p>12:30 PM - 1:30 PM</p>
                                </div>
                                <p className="desc">Lunch Break  + Executive Trust Dialogue & Luncheon<br />
                                + Immerse Pavilion Tour + Builders' Sessions</p>
                            </div>

                            <div className="agenda-box show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>1:30 PM - 2:10 PM</p></div>
                                    <p className="desc">From Complexit To Clarity:<br />
                                    Data Plane Resilienc in the Cloudflare Network</p>
                                    
                                    <button type="button" onClick={()=>setAbstract5Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-4"><p><strong style={{fontWeight: 600}}>Ayush Verma,<br /></strong>Head of Solutions<br />
                                    Engineering, <br />
                                    Cloudflare ASEAN<br /><br /></p>
                                
                                    <div className="mt-1"><p><strong style={{fontWeight: 600}}>Sze Ron Tham,<br /></strong>Solution Engineerig,<br />
                                    Cloudflare ASEAN<br /></p>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="agenda-box show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>2:10 PM - 2:40 PM</p></div>
                                    <p className="desc">Three Paths to App Modernization:<br />
                                    Rehost Replatform Refactor</p>
                                    
                                    <button type="button" onClick={()=>setAbstract6Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-4"><p><strong style={{fontWeight: 600}}>Saikrishna Chavali,<br /></strong>Senior Product,<br />
                                    Marketina, <br />
                                    Cloudflare Inc.<br /></p>
                                    </div>
                                </div>
                            </div>

                            <div className="agenda-box show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>2:40 PM - 3:10 PM</p></div>
                                    <p className="desc">From VPN to Zero Trust:<br />
                                    Fast-track your remote access projects</p>
                                    
                                    <button type="button" onClick={()=>setAbstract7Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-4"><p><strong style={{fontWeight: 600}}>Leela Kanakala,<br /></strong>Regional Senio<br />
                                    Solutions Specialist,<br />
                                    Cloudflare<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {page == 3 && <div className="agenda-deatail">
                            <div className="agenda-box show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>3:10 PM - 3:40 PM</p></div>
                                    <p className="desc">Maximize Reliability and Uptime<br />
                                        with Multi-Vendor Topologies</p>
                                    
                                    <button type="button" onClick={()=>setAbstract8Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-4"><h6>Pramod Rane,</h6><p>Senior Solutions,<br />
                                        Engineer,<br />Cloudflare</p>
                                    </div>
                                </div>
                            </div>

                            <div className="agenda-box agenda-item show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>3:40 PM 4:10 PM</p></div>
                                    <p className="desc">Network Modernization</p>
                                    <button type="button" onClick={()=>setAbstract9Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-4"><p><strong style={{fontWeight: 600}}>Edwin Wong,<br /></strong>Specialist Solution<br />
                                    Engineer (Zero Trust), <br />
                                    Cloudflare<br /><br /></p>
                                
                                    <div className="mt-1"><p><strong style={{fontWeight: 600}}>Ivan Lim,<br /></strong>Sales Engineer,<br />
                                    CrowdStrike<br /></p>
                                    </div>
                                </div>
                                    
                                </div>
                            </div>

                            <div className="agenda-box agenda-item show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>4:10 PM - 4:40 PM</p></div>
                                    <p className="desc">Securing Applications in the Age of AI</p>
                                    <button type="button" onClick={()=>setAbstract10Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                </div>
                                    <div className="col-4"><h6>Claire Lim,<br /></h6> <p>Specialist Solutions<br />
                                        Engineer,<br />Cloudflare ASEAN</p>
                                    </div>
                                </div>
                            </div>
                            <div className="agenda-box agenda-item show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>4:40 PM - 4:50 PM</p></div>
                                    <p className="desc">Lucky Draw & Closing Remarks</p>
                                </div>
                                    <div className="col-4"><h6>Kenneth Lai,<br /></h6> <p>Vice President ASEAN</p>
                                    </div>
                                </div>
                            </div>

                            <div className="agenda-box agenda-item">
                                <div className="box-two">
                                <div>
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>4:50 PM - 5:30 PM</p></div>
                                    <p className="desc">Networking & Cocktail Reception +
                                    <br />Immerse Pavilion Tour + Builders' Sessions</p>
                                </div>
                                
                                </div>
                            </div>

                
               

                        </div>}
                        <div className="pagination">
                            <a onClick={()=>togglePage("p")} className="nav"><i className="bi bi-chevron-left me-2"></i> Earlier</a>
                            <a onClick={()=>togglePage(1)} className={`page-number ${page == 1 ? "active" : ""}`}>1</a>
                            <a onClick={()=>togglePage(2)} className={`page-number ${page == 2 ? "active" : ""}`}>2</a>
                            <a onClick={()=>togglePage(3)} className={`page-number ${page == 3 ? "active" : ""}`}>3</a>
                            <a onClick={()=>togglePage("n")} className="nav">Later <i className="bi bi-chevron-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </section>
  
            {abstract1Visible && <Abstract1Modal show={abstract1Visible} handleClose={setAbstract1Visible} />}
            {abstract2Visible && <Abstract2Modal show={abstract2Visible} handleClose={setAbstract2Visible} />}
            {abstract3Visible && <Abstract3Modal show={abstract3Visible} handleClose={setAbstract3Visible} />}
            {abstract4Visible && <Abstract4Modal show={abstract4Visible} handleClose={setAbstract4Visible} />}
            {abstract5Visible && <Abstract5Modal show={abstract5Visible} handleClose={setAbstract5Visible} />}
            {abstract6Visible && <Abstract6Modal show={abstract6Visible} handleClose={setAbstract6Visible} />}
            {abstract7Visible && <Abstract7Modal show={abstract7Visible} handleClose={setAbstract7Visible} />}
            {abstract8Visible && <Abstract8Modal show={abstract8Visible} handleClose={setAbstract8Visible} />}
            {abstract9Visible && <Abstract9Modal show={abstract9Visible} handleClose={setAbstract9Visible} />}
            {abstract10Visible && <Abstract10Modal show={abstract10Visible} handleClose={setAbstract10Visible} />}
           

            <Footer page="agenda" />
        </div>
    )
}

export default Agenda;