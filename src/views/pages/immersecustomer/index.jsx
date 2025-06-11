import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getPassport, getToken, hideLoading, loadError, loadSuccess, setToken, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";


const ImmerseCustomer = () => {
    const navigate = useNavigate();
  
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
              <a href="/app/immerse-main"><i className="bi bi-chevron-left "></i> Back</a>
           </div>
          </div>

          <div className="container">
            
            <div className="top-lable">
                <div className="custom-badge-box bg-warning text-white fw-bold">
                    8:00AM - 5:00PM
                 </div>
                 <div className="name-title">
                    <h6><span className="gradiant-text">AQ Jiao</span> </h6>
                 </div>
            </div>
            <div className="pavilion-box">
            <div class="pvl-new-box">
                  <div class="pavilion-img-box d-flex align-items-center">
                    <img src="/assets/image/pavilion-5.png" alt=""/>
                    <h4>Immerse VIP Lounge
                    </h4>
                </div>
                <div class="pvl-vip-button">
                  <button class="gradiant-button">VIP Access</button>
                </div>
               </div>
                <div><p className="des-pavilion">Step into the Cloudflare VIP Lounge—an exclusive space
                    curated for premium and executive guests seeking deeper
                    conversations and tailored experiences. Here, you'll
                    connect with Cloudflareʼs team of experts, including those
                    driving ongoing customer success. Discover how leading
                    organizations are unlocking performance, resilience, and
                    security through close collaboration with Cloudflare and its
                    partners. Explore real-world outcomes, gain personalized
                    insights, and maximize the value of your Cloudflare
                    investment in a relaxed, high-touch environment.</p>
                </div>
            </div>
            <div className="mt-5"><img src="/assets/image/immerse-customer-spotlight.png" alt="" /></div>
            </div>
        </section>
        <Footer />
    </div>
    )
}
export default ImmerseCustomer;