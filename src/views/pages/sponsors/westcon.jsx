import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { destroySession, getToken } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

const Westcon = () => {
    const navigate = useNavigate();

  
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
                   <a href="/app/sponsors"><i className="bi bi-chevron-left "></i> Back</a> 
                </div>
            </div>
            <div className="sponsor-detail-ad">
                <div className="container">
                  <h2>Pacific Tech</h2>
                  <img src="/assets/image/sponsoer3.png" alt="" className="sponsor-logo-img"/>
                  <p className="para">Pacific Tech is an award-winning Value Added Distributor
                    offering cybersecurity, data protection and managed services
                    across ASEAN. With strong technical expertise and a vast
                    partner network, we support top vendors like Cloudflare,
                    Fortinet, Sophos, Thales, Keysight and more across
                    Singapore, Malaysia, Thailand, Indonesia and Cambodia.</p>
                    <h3 className="para-title">Featured Highlights</h3>

                    <p className="para">Pacific Tech is a leading Value Added Distributor in ASEAN.
                        We specialize in cybersecurity, data protection, and business
                        continuity-offering trusted solutions from top vendors like
                        Cloudflare. With strong local support and proven regional
                        expertise, we empower Thai businesses to stay secure,
                        resilient, and ready for the future.</p>
                    <div className="gray-box-img">
                        <img src="/assets/image/sp3.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}

export default Westcon;