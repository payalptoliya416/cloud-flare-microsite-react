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
import Abstract11Modal from "../../modals/abstracts/abstract11modal";

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
    const [abstract11Visible, setAbstract11Visible] = useState(false);
  
    useEffect(()=>{
        if(getToken() == null){
            destroySession()
            navigate("/login")
        }
    },[])

    // const togglePage = (_page) => {
    //     if(_page === "p"){
    //         if(page > 1){setPage(prev => (prev - 1))}
    //     }else if(_page === "n"){
    //         if(page < 3){setPage(prev => (prev + 1))}
    //     }else{
    //         setPage(_page)
    //     }
    // }
            const togglePage = (_page) => {
            if (_page === "p" && page > 1) {
                setPage(prev => prev - 1);
            } else if (_page === "n" && page < 3) {
                setPage(prev => prev + 1);
            } else if (typeof _page === "number") {
                setPage(_page);
            }
            };

    return (
        <div className="main">
            <section className="login-page">
                <div className="logo">
                    <img src="/assets/image/logosec.png" alt="" className="mx-auto logo-sec"/>
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
                                <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>09:40 AM - 09:55 AM</p></div>
                                <p className="desc">Cloudflare Immerse 2025 Welcome Address</p>
                                </div>
                                <div className="col-4"><h6>Kenneth Lai</h6><p className="para-text">Vice President<br />
                                    Cloudflare ASEAN</p>
                                </div>
                            </div>
                            </div>

                            <div className="agenda-box">
                            <div className="box-two row">
                                <div className="col-8 pe-0">
                                <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>9:55 AM - 10:15 AM</p></div>
                                <p className="desc">Powering the Future of Application,<br />
                                   Security and Network Modernization</p>
                                </div>
                                <div className="col-4"><h6>Harman Nagra,</h6><p className="para-text">Senior Manager,<br />
                                    Solutions Engineering, <br/>Cloudflare APAC</p>
                                </div>
                            </div>
                            </div>
                            
                            <div className="agenda-box show-modal-overlay">
                            <div className="box-two row">
                                <div className="col-8 pe-0">
                                <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>10:15 AM - 10:45 AM</p></div>
                                <p className="desc">Security & AI: Resetting the Cybersecurity<br />
                                    Playbook for Enterprises</p>
                                    <button type="button" onClick={()=>setAbstract1Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                </div>
                                <div className="col-4"><h6>AVM Amorn <br/> Chomchoey,</h6><p className="para-text">Vice President,<br />
                                   Secretary General,<br />NCSA Thailand</p>
                                </div>
                            </div>
                            </div>

                            <div className="agenda-box">
                            <div className="clock-div">
                                <img src="/assets/image/Clock.png" alt=""/>
                                <p>10:45 AM - 11:05 AM</p>
                            </div>
                            <p className="desc">Morning Tea Break + Immerse Pavilion Tour<br />
                             + AI Hub + Buiders' Sessions</p>
                            </div>
                        

                        </div>}
                        {page == 2 && <div className="agenda-deatail">
                            <div className="agenda-box show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-5 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>11:05 AM - 11:50 AM</p></div>
                                   <h6 className="mb-0">SECURITY THOUGHT <br/> LEADERS CUSTOMER PANEL:</h6>
                                    <p className="desc">"Platformization" & AI:<br />
                                        The Dual Forces Shaping the<br />Future of Application, Security<br />and Network Modernization</p>
                                    <button type="button" onClick={()=>setAbstract3Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-3">
                                        <h6>Pichavee <br/>Voraphatphokin,</h6><p className="para-text mb-3">Regional Sales Director,<br />Cloudflare Thailand,<br />Philippines and Indochina</p>
                                        <h6>Chatchawat <br/> Asawarakwong,</h6><p className="para-text">Vice Chairman and Group<br />CISO, KASIKORN
                                       <br />Business-Technology Group</p>
                                    </div>
                                    
                                    <div className="col-4">
                                        <h6>Assoc. Prof. Cherdchai <br/>Nopmaneejumruslers, </h6><p className="para-text mb-3">M.D., Vice President for
                                        <br />Information Technology and <br />Digital Transformation, <br/>Mahidol University
                                            </p>
                                        <h6>Wichai Sirirat,</h6><p className="para-text">Assistant Chief Security<br /> Officer, gosoft & CPALL Group</p>
                                    </div>
                                    
                                </div>
                            </div>
                        
                            <div className="agenda-box agenda-item  show-modal-overlay">
                                <div className="box-two row">
                                    <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>11:50 AM - 12:20 PM</p></div>
                                    <p className="desc"> From Complexity To Clarity:<br />
                                        RData Plane Resiliency in the Cloudflare Network</p>
                                        <button type="button" onClick={()=>setAbstract5Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                        
                                    </div>
                                    <div className="col-4"><h6>Ayush Verma,</h6><p className="para-text">Head of Solutions<br />
                                    Engineering<br/>  Cloudflare ASEAN</p>
                                    </div>
                                </div>
                            </div>

                            <div className="agenda-box show-modal-overlay">
                                <div className="clock-div">
                                <img src="/assets/image/Clock.png" alt=""/>
                                <p>12:20 PM - 1:20 PM</p>
                                </div>
                                <p className="desc">Lunch Break + Immerse Pavilion Tour<br />
                               + AI Hub + Buiders' Sessions</p>
                            </div>

                            <div className="agenda-box show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>1:20 AM - 1:50 PM</p></div>
                                    <p className="desc">AI + Security: The Dual Forces –<br />
                                   From Network to Cloud, Apps to AI</p>
                                    
                                    <button type="button" onClick={()=>setAbstract2Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-4"><h6>Clement Wong</h6><p className="para-text">Head of Centre of<br />
                                  Excellence (CoE), <br />
                                   Cloudflare APAC</p>

                                </div>
                                </div>
                            </div>

                            <div className="agenda-box show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>2:20 PM - 2:45 PM</p></div>
                                    <p className="desc">Agentless, Effortless: Secure Contractor<br />
                                    Access with Cloudflare One</p>
                                    
                                    <button type="button" onClick={()=>setAbstract6Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-4"><h6>Leela Kanakala,</h6><p className="para-text">
                                    Regional Senior <br /> Solutions Specialist, <br/>
                                  Cloudflare APJC</p>
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
                                    <div className="col-4"><h6>Leela Kanakala,</h6><p className="para-text">Regional Senio<br />
                                    Solutions Specialist,<br />
                                    Cloudflare<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {page == 3 && <div className="agenda-deatail">
                            <div className="agenda-box show-modal-overlay">
                                <div className="clock-div">
                                <img src="/assets/image/Clock.png" alt=""/>
                                <p>12:45 PM - 2:05 PM</p>
                                </div>
                                <p className="desc">Afternoon Tea Break + Immerse Pavilion Tour<br />
                             + AI Hub + Buiders' Sessions</p>
                            </div>

                            <div className="agenda-box agenda-item show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-6 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>3:05 PM 3:50 PM</p></div>
                                    <h6 className="mt-1">INDUSTRY THOUGHT LEADERS <br/>FIRESIDE CHAT:</h6>
                                    <p className="desc mt-0">Securing the Future of Digital Banking: <br/>AI-Powered Resilience,
                                            Performance, and Security at the Edge</p>
                                    <button type="button" onClick={()=>setAbstract9Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                    
                                </div>
                                    <div className="col-3"><h6>Ayush Verma,</h6><p className="para-text">Head of Solutions<br />
                                   Engineering <br /> Cloudflare ASEAN<br /><br /></p>
                                </div>
                                    <div className="col-3"><h6>Kirill Yuzhakov,</h6><p className="para-text">Head of IT Infrastructure Division,
                                     <br />ABA Bank <br /></p>
                                
                                    <div className="mt-1"><h6>Harman Nagra,</h6><p className="para-text">Senior Manager,<br />
                                    Solutions Engineering,<br />Cloudflare APAC </p>
                                    </div>
                                </div>
                                    
                                </div>
                            </div>

                            <div className="agenda-box agenda-item show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>3:50 PM - 4:20 PM</p></div>
                                    <p className="desc">Maximize Reliability and Uptime with <br/> Multi-Vendor Topologies </p>
                                    <button type="button" onClick={()=>setAbstract10Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                </div>
                                    <div className="col-4"><h6>Siwat Tantikul,<br /></h6> <p className="para-text">Senior Solutions Engineer,<br />
                                        Cloudflare Thailand</p>
                                    </div>
                                </div>
                            </div>
                            <div className="agenda-box agenda-item show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>4:20 PM - 4:50 PM</p></div>
                                    <p className="desc">Under Siege: What a DDoS Attack Feels Like - <br/>And Why You Need a Partner to Survive It</p>
                                     <button type="button" onClick={()=>setAbstract11Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                                </div>
                                    <div className="col-4"><h6>Alex Forster,<br /></h6> <p className="para-text">Head of Engineering, <br/>DDoS Mitigation, <br/>Cloudflare Inc.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="agenda-box agenda-item show-modal-overlay">
                                <div className="box-two row">
                                <div className="col-8 pe-0">
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>4:50 PM - 5:00 PM</p></div>
                                    <p className="desc">Lucky Draw & Closing Remarks</p>
                                </div>
                                    <div className="col-4"><h6>Pichavee<br />Voraphatphokin</h6> <p className="para-text">Regional Sales Director,
                                  <br/>Cloudflare Thailand,<br/>Philippines and Indochina</p>
                                    </div>
                                </div>
                            </div>

                            <div className="agenda-box agenda-item">
                                <div className="box-two">
                                <div>
                                    <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>5:00 PM - 5:45 PM</p></div>
                                    <p className="desc">Networking & Cocktail Reception + Immerse Pavilion Tour
                                    <br />+ AI Hub + Buiders' Sessions</p>
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
            {abstract11Visible && <Abstract11Modal show={abstract11Visible} handleClose={setAbstract11Visible} />}
           

            <Footer page="agenda" />
        </div>
    )
}

export default Agenda;