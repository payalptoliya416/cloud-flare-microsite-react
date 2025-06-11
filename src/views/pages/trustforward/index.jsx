import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { destroySession,  getToken,  } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Trust1Modal from "../../modals/trustforwaard/tf1modal";
import Trust2Modal from "../../modals/trustforwaard/tf2modal";
import Trust3Modal from "../../modals/trustforwaard/tf3modal";


const TrustForward = () => {
    const navigate = useNavigate();
    const [trust1Visible, setTrust1Visible] = useState(false);
    const [trust2Visible, setTrust2Visible] = useState(false);
    const [trust3Visible, setTrust3Visible] = useState(false);
  
    useEffect(()=>{
        if(getToken() == null){
            destroySession()
            navigate("/login")
        }
    },[])

    return (
        <div className="main ">
        <section className="login-page">
          <div className="logo">
            <img src="/assets/image/logo-sin.png" alt="" className="mx-auto logo-sec"/>
            <div className="back-btn">
              <a href="/app"><i className="bi bi-chevron-left "></i> Back</a>
           </div>
          </div>

        <div className="container">
                
            <div className="trust-page-title">
                <div>
                <h2 className="builder-title-grad"><span className="gradiant-text">Executive Trust Dialogue<br />& Luncheon</span> </h2>
                <h6 className="builder-short-des">This dialogue is exclusively available to VIP attendees</h6>
                </div>
                <div className="trust-badge-box text-white fw-bold">
                <p>VIP Access</p>
            </div>
            </div>


                <h3 className="builder-agenda-title">Agenda</h3>

            <div className="builder-page agenda-detail-section">
                
            <div className="agenda-deatail">
            
                <div className="agenda-box">
                    <div className="box-two row">
                        <div className="col-8">
                        <div className="clock-div">
                            <div className="clock-inner-div">
                            <img src="/assets/image/Clock.png" alt=""/><p>12:40 PM</p>
                            </div>
                            <div className="clock-inner-div">
                            <img src="/assets/image/location.png" alt=""/><p>Ocean 5, Level 2</p>
                            </div>
                        </div>
                        <p className="desc">Opening Keynote:<br />Powering the Future of Applicaiton,<br />Security and Network Modernization</p>
                        <button type="button" onClick={()=>setTrust1Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                        </div>
                        <div className="col-4"><h6> Elton Chew,</h6><p>Senior Director,<br />
                            Solutions Engineering,<br />Cloudflare APAC</p>
                        </div>
                    </div>
                </div>

                <div className="agenda-box">
                    <div className="box-two row">
                        <div className="col-8">
                        <div className="clock-div">
                            <div className="clock-inner-div">
                            <img src="/assets/image/Clock.png" alt=""/><p>12:50 PM</p>
                            </div>
                            <div className="clock-inner-div">
                            <img src="/assets/image/location.png" alt=""/><p>Ocean 5, Level 2</p>
                            </div>
                        </div>
                        <p className="desc">The Real-World Impacts:<br />Customer Case Study Sharing</p>
                        <button type="button" onClick={()=>setTrust2Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                        </div>
                        <div className="col-4"><h6>Ayush Verma,</h6><p> Head of Solutions<br />
                            Engineering,<br />Southeast Asia,<br />Cloudflare ASEAN</p>
                        </div>
                    </div>
                </div>
                <div className="agenda-box">
                    <div className="box-two row">
                        <div className="col-8">
                        <div className="clock-div">
                            <div className="clock-inner-div">
                            <img src="/assets/image/Clock.png" alt=""/><p>1:10 PM</p>
                            </div>
                            <div className="clock-inner-div">
                            <img src="/assets/image/location.png" alt=""/><p>Ocean 5, Level 2</p>
                            </div>
                        </div>
                        <p className="desc">Executive Panel Discusson:<br />Powering National Cyber Resilience<br />in an AI-Driven World</p>
                        <button type="button" onClick={()=>setTrust3Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                        </div>
                        <div className="col-4"><h6> Ben Munroe,</h6><p>Vice President,<br />
                        APAC Marketing,<br />Cloudflare</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

       </section>
       {trust1Visible && <Trust1Modal show={trust1Visible} handleClose={setTrust1Visible} />}
       {trust2Visible && <Trust2Modal show={trust2Visible} handleClose={setTrust2Visible} />}
       {trust3Visible && <Trust3Modal show={trust3Visible} handleClose={setTrust3Visible} />}
        <Footer />
    </div>
    )
}
export default TrustForward;