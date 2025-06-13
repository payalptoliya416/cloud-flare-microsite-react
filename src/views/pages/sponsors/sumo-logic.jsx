import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { destroySession, getToken } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

const SumoLogic = () => {
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
                  <h2>nForce Secure</h2>
                  <img src="/assets/image/sponsoer2.png" alt="" className="sponsor-logo-img"/>
                  <p className="para">Provides complete IT network solutions with full Cyber Security
                        Distributor and comprehensive protection nForce Secure Public
                        Company Limited is a Thai Value-added specialty distributor of
                        IT Security, Information Management and Network Solutions.</p>
                        <h3 className="para-title">Featured Highlights</h3>

                    <p className="para">Our security technologies deliver advanced software and
                        products for cloud and data center security, network security,
                        advanced threat detection, data security, legacy
                        modernization, data analytic and conversion of big data into
                        security intelligence.</p>
                    <div className="gray-box-img">
                        <img src="/assets/image/sp2.png" alt=""/>
                    </div>
                    <div className="download-btn">
                    <a className="gradiant-button btn" target="_blank" href="https://domini.immerseasean.com/brochures/TechDirect-E-brochures.pdf" download={true}> Download <img src="/assets/image/download.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}

export default SumoLogic;