import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { destroySession, getToken } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

const PacificTech = () => {
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
                  <h2>NTT Data</h2>
                  <img src="/assets/image/spon1.png" alt="" className="sponsor-logo-img"/>
                  <p className="para">NTT DATA is a $30B+ global innovator in business and
                        technology services, serving 75% of the Fortune Global 100.
                        With experts in 50+ countries, we deliver consulting, AI, digital
                        infrastructure, and connectivity solutions - backed by $3.6B
                        annual R&D to help clients innovate, transform, and thrive in a
                        sustainable digital future.
                        </p>
                    <h3 className="para-title">Featured Highlights</h3>

                    <p className="para">Innovation demands trust. NTT DATA secures complex
                            enterprises with end-to-end protection— across cloud,
                            network, and applications. As a global leader, we help you
                            reduce risk, stay resilient, and transform faster. Security that
                            enables strategy.</p>
                            <p className="mb-4">Cybersecurity | NTT DATA</p>
                    <div className="gray-box-img">
                        <img src="/assets/image/sp1.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}

export default PacificTech;