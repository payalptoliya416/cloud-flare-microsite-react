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
                <img src="/assets/image/logoone.png" alt="" className="mx-auto micro-one"/>
                <img src="/assets/image/logosec.png" alt="" className="mx-auto micro-sec"/>
                <div className="back-btn">
                   <a href="/app/sponsors"><i className="bi bi-chevron-left "></i> Back</a> 
                </div>
            </div>
            <div className="sponsor-detail-ad">
                <div className="container">
                  <h2>Sumo Logic | Tech Direct</h2>
                  <img src="/assets/image/sumoLogo.png" alt="" className="sponsor-logo-img"/>
                  <p className="para">TechDirect, accessible at <u>techdirect.net</u>, is a 
                    Singapore-based IT solutions provider specializing in 
                    managed services and cybersecurity. With over 13 years of 
                    industry experience, TechDirect offers a comprehensive suite 
                    of services designed to address modern IT challenges faced 
                    by businesses across the ASEAN region.</p>
                    <h3 className="para-title">Featured  Highlights</h3>

                    <p className="para">Logs are simple on their own, but with digital apps, 
                        infrastructure, and AI multiplying them, the data can 
                        overwhelm teams. Sumo Logicʼs Log Analytics Platform 
                        transforms this data into actionable insights, fueling 
                        performance, security, and threat detection. Take fast, 
                        informed action with Sumo Logic. Learn more today!</p>
                    <div className="gray-box-img">
                        <img src="/assets/image/sumoBanner.png" alt=""/>
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