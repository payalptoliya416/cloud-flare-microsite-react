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
                  <h2>Westcon</h2>
                  <img src="/assets/image/westcon-logo.png" alt="" className="sponsor-logo-img"/>
                  <p className="para">TWestcon-Comstor is a global technology provider and
                        specialist distributor, operating in more than 70 countries.
                        It delivers business value and opportunity by connecting the 
                        worldʼs leading IT vendors with a channel of technology 
                        resellers, systems integrators and service providers. It goes to 
                        market through two lines of business: Westcon and Comstor</p>
                    <h3 className="para-title">Featured  Highlights</h3>

                    <p className="para">Say goodbye to complexity and hello to growth with our
                        Customer Success value-added services!  Meeting the 
                        demand for subscription-based models and Anything-as-a -Service can be a challenge. That's why we're here to 
                        simplify your journey, boost efficiency, and meet evolving 
                        customer demands—all with our support at every step.</p>
                    <div className="gray-box-img">
                        <img src="/assets/image/westconBanner.png" alt=""/>
                    </div>
                    <div className="download-btn">
                    <a className="gradiant-button btn" target="_blank" href="https://domini.immerseasean.com/brochures/SG_Westcon_Generic_Brochure.pdf" download={true}> Download <img src="/assets/image/download.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}

export default Westcon;