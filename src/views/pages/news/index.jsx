import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getCandy, getPassport, getToken, hideLoading, loadError, loadSuccess, setToken, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { Sponsor1Modal, Sponsor2Modal, Sponsor3Modal, Sponsor4Modal } from "../../modals/sponsors";

const News = () => {
    const navigate = useNavigate();
    const [sponsor1Visible, setSponsor1Visible] = useState(false);
    const [sponsor2Visible, setSponsor2Visible] = useState(false);
    const [sponsor3Visible, setSponsor3Visible] = useState(false);
    const [sponsor4Visible, setSponsor4Visible] = useState(false);
  
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
            <div className="sponsor-info">
                <div className="container">
                <h2 className="gradiant-text sponsor-title">News & Resources</h2>
                    <div className="shoutout-box">
                        <div>
                            <img src="/assets/image/speaker.png" alt=""/>
                        </div>
                        <div>
                            <h4>Shoutouts</h4>
                            <p>Exclusive Highlight</p>
                        </div>
                        <div>
                            <a href="/app/shoutouts"><button className="gradiant-button btn"> Find out more<i class="bi bi-chevron-right"></i></button></a>
                        </div>
                    </div>
    
                    <div class="all-sponsor-title"><h3>All Our Sponsors</h3></div>
                    <div className=" row ">
                            <div className="col-4">
                                <div className="sponsor-col">
                                   <div className="sponsor-col-img">
                                       <img src="/assets/image/sponsour4.png" alt=""/>
                                   </div>
                                   <div className="sponsor-col-data">
                                       <div>
                                           <h3>Pacific Tech</h3>
                                           <p>Gold Sponsor</p>
                                       </div>
                                     <a href="/app/sponsors/pacific-tech"><button className="gradiant-button btn"> View Full Profile
                                     <i className="bi bi-chevron-right"></i></button></a>
                                   </div>
                                </div>
                            </div>
                             <div className="col-4">
                                 <div className="sponsor-col">
                                    <div className="sponsor-col-img">
                                        <img src="/assets/image/sumo-logic.png" alt=""/>
                                    </div>
                                    <div className="sponsor-col-data">
                                        <div>
                                            <h3>Sumo Logic | TechDirect</h3>
                                            <p>Gold Sponsor</p>
                                        </div>
                                      <a href="/app/sponsors/sumo-logic"><button className="gradiant-button btn"> View Full Profile
                                      <i className="bi bi-chevron-right"></i></button></a>
                                    </div>
                                 </div>
                             </div>
                             <div className="col-4">
                                 <div className="sponsor-col">
                                    <div className="sponsor-col-img">
                                        <img src="/assets/image/westcon-logo.png" alt=""/>
                                    </div>
                                    <div className="sponsor-col-data">
                                        <div>
                                            <h3>Westcon</h3>
                                            <p>AI-Accelerator Sponsor</p>
                                        </div>
                                      <a href="/app/sponsors/westcon"><button className="gradiant-button btn"> View Full Profile
                                      <i className="bi bi-chevron-right"></i></button></a>
                                    </div>
                                 </div>
                             </div>
                             {/* <div className="col-4">
                                 <div className="sponsor-col">
                                    <div className="sponsor-col-img">
                                        <img src="/assets/image/sponsor-cloud.png" alt=""/>
                                    </div>
                                    <div className="sponsor-col-data">
                                       <div>
                                        <h3>Sponsor</h3>
                                        <p>Gold Sponsor</p>
                                    </div>
                                      <a href="/app/sponsors/pacific-tech"><button className="gradiant-button btn"> View Details<i className="bi bi-chevron-right"></i></button></a>
                                    </div>
                                 </div>
                             </div>
                             <div className="col-4">
                                 <div className="sponsor-col">
                                    <div className="sponsor-col-img gray-img">
                                        <img src="/assets/image/sponsour3.png" alt=""/>
                                    </div>
                                    <div className="sponsor-col-data">
                                        <div>
                                            <h3>Sponsor</h3>
                                            <p>AI-Accelerator Sponsor</p>
                                        </div>
                                      <a href="/app/sponsors/pacific-tech"><button className="gradiant-button btn"> View Details<i className="bi bi-chevron-right"></i></button></a>
                                    </div>
                                 </div>
                             </div> */}
                             <div className="col-4">
                                 <div className="sponsor-col show-modal-overlay">
                                    <div className="sponsor-col-img">
                                        <img src="/assets/image/sponsour1.png" alt=""/>
                                    </div>
                                    <div className="sponsor-col-data">
                                        <div>
                                            <h2>First Wave Technology Pte. Ltd. </h2>
                                            <p>Bronze Sponsor</p>
                                        </div>
                                      <button type="button" onClick={()=>setSponsor1Visible(true)} className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                 </div>
                                   
                             </div>
                             <div className="col-4">
                                 <div className="sponsor-col show-modal-overlay" >
                                    <div className="sponsor-col-img">
                                        <img src="/assets/image/master concept.png" alt=""/>
                                    </div>
                                    <div className="sponsor-col-data">
                                        <div>
                                            <h2>MCI (Master Concept)</h2>
                                            <p>Bronze Sponsor</p>
                                        </div>
                                       <button type="button" onClick={()=>setSponsor2Visible(true)} className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                 </div>
                             </div>
                             {/* <div className="col-4">
                                 <div className="sponsor-col show-modal-overlay">
                                    <div className="sponsor-col-img gray-img">
                                        <img src="/assets/image/sponsour3.png" alt=""/>
                                    </div>
                                    <div className="sponsor-col-data">
                                        <div>
                                            <h3>Sponsor </h3>
                                            <p>Bronze Sponsor</p>
                                        </div>
                                      <button type="button" onClick={()=>setSponsor3Visible(true)} className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                  
                                 </div>
                             </div>
                             <div className="col-4">
                                 <div className="sponsor-col show-modal-overlay">
                                    <div className="sponsor-col-img">
                                        <img src="/assets/image/sponsor-cloud.png" alt=""/>
                                    </div>
                                    <div className="sponsor-col-data">
                                        <div>
                                            <h3>Sponsor </h3>
                                            <p>Bronze Sponsor</p>
                                        </div>
                                      <button type="button" onClick={()=>setSponsor4Visible(true)} className="checkout-btn btn"><img src="/assets/image/message.png" alt="" className="me-1"/>  View Remarks </button>
                                    </div>
                                    
                                 </div>
                             </div> */}
                        </div>
                </div>
            </div>
        </section>

        {sponsor1Visible && <Sponsor1Modal show={sponsor1Visible} handleClose={setSponsor1Visible} />}
        {sponsor2Visible && <Sponsor2Modal show={sponsor2Visible} handleClose={setSponsor2Visible} />}
        {sponsor3Visible && <Sponsor3Modal show={sponsor3Visible} handleClose={setSponsor3Visible} />}
        {sponsor4Visible && <Sponsor4Modal show={sponsor4Visible} handleClose={setSponsor4Visible} />}

            
        <Footer />
    </div>
    )
}

export default News;