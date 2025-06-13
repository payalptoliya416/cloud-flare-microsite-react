import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { destroySession, getToken } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

const SoftDebut = () => {
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
                  <h2>SoftDe'but</h2>
                  <img src="/assets/image/sponsoer4.png" alt="" className="sponsor-logo-img"/>
                  <p className="para">SoftDe'but is a trusted IT solutions distributor. We specialize
                        in software, cloud, and web application solutions, partnering
                        with over 100 global brands to deliver Innovation, expertise,
                        and exceptional support to clients.</p>
                        <h3 className="para-title">Featured Highlights</h3>

                    <p className="para">SoftDeʼbut delivers end-to-end IT services — from global
                            software distribution, custom application development, and
                            service provisioning to expert consulting and full MSP
                            support — helping grow with trusted technology solutions.
                            Visit Us we are ready to support you</p>
                    <div className="gray-box-img">
                        <img src="/assets/image/sp4.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}

export default SoftDebut;