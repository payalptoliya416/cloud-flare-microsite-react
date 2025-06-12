import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getPassport, getToken, hideLoading, loadError, loadSuccess, setToken, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";


const Shoutouts = () => {
    const navigate = useNavigate();
  
    useEffect(()=>{
        if(getToken() == null){
            destroySession()
            navigate("/login")
        }
    },[])

    return (
        <div className="main ">
        <section>
            <div className="micro-logo">
                <img src="/assets/image/logosec.png" alt="" className="mx-auto micro-sec"/>
                <div className="back-btn">
                   <a href="/app/news"><i className="bi bi-chevron-left "></i> Back</a> 
                </div>
            </div>
            <div className="sponsor-info">
                <div className="container">
                    <h2 className="gradiant-text sponsor-title">Shoutouts</h2>
                    <div className="all-sponsor-title mb-2"><h3>Gold Sponsor</h3></div>

                    <div className="sponsor-main-box">
                        <div className="sponsor-inner-box mb-2 row align-items-center">
                            <div className="sponsor-img col-3">
                                <img src="/assets/image/sponsour4.png" alt=""/>
                            </div>
                            <div className="sponsor col-3">
                                <h4>Pacific Tech </h4>
                            </div>
                            <div className="shout-out-des col-6">
                                <p>Performance & Security Health Check</p>
                                    <a href="/app/sponsors/pacific-tech" className="gradiant-button btn"> View Full Profile
                                    <i className="bi bi-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="sponsor-inner-box row align-items-center">
                            <div className="sponsor-img col-3">
                                <img src="/assets/image/sumo-logic.png" alt=""/>
                            </div>
                            <div className="sponsor col-3">
                                <h4>Sumo Logic <br/> TechDirect </h4>
                            </div>
                            <div className="shout-out-des col-6">
                                <p>Visit Sumo Logic + TechDirect to optimize performance! Join our lucky draw to win a
                                Bose SoundLink speaker! </p>
                                    <a href="/app/sponsors/sumo-logic" className="gradiant-button btn"> View Full Profile
                                    <i className="bi bi-chevron-right"></i></a>
                            </div>
                        </div>

                        <div className="all-sponsor-title mb-2 mt-4"><h3>AI-Accelerator Sponsor </h3></div>

                        <div className="sponsor-inner-box mb-2 row align-items-center">
                            <div className="sponsor-img col-3">
                                <img src="/assets/image/westcon logo.png" alt=""/>
                            </div>
                            <div className="sponsor col-3">
                                <h4>Westcon </h4>
                            </div>
                            <div className="shout-out-des col-6">
                                <p>Westcon-Comstor is a global technology distributor in 70+ countries, connecting top IT vendors with resellers to drive business
                                value and opportunities.</p>
                                <a href="/app/sponsors/westcon" className="gradiant-button btn"> View Full Profile
                                <i className="bi bi-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="all-sponsor-title mb-2 mt-4"><h3>Bronze Sponsor </h3></div>

                        <div className="sponsor-inner-box mb-2 row align-items-center">
                            <div className="sponsor-img col-3">
                                <img src="/assets/image/sponsour1.png" alt=""/>
                            </div>
                            <div className="sponsor col-3">
                                <h4>First Wave
                                    Technology
                                    Pte. Ltd. </h4>
                            </div>
                            <div className="shout-out-des col-6">
                                <p>Discover how First Wave simplifies multicloud and security with Zero Trust, WAF, and observability
                        - visit our booth and book a free cloud readiness assessment! </p>
                            </div>
                        </div>

                        <div className="sponsor-inner-box row align-items-center">
                            <div className="sponsor-img col-3">
                                <img src="/assets/image/master concept logo.png" alt=""/>
                            </div>
                            <div className="sponsor col-3">
                                <h6>MCI </h6>
                                <h4>(Master Concept)</h4>
                            </div>
                            <div className="shout-out-des col-6">
                                <p>Trusted by Cloudlare, Master Concept offers a full specirum of security services, coupled with strategic tech guidance to
                                build a secure foundation for your organization's future.  </p>
                            </div>
                        </div>


                    </div>





                </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}
export default Shoutouts;