import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getPassport, getToken, hideLoading, loadError, loadSuccess, setToken, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";


const ImmersePavillion = () => {
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
            <img src="/assets/image/logosec.png" alt="" className="mx-auto logo-sec"/>
            <div className="back-btn">
              <a href="/app/Immerse-main"><i className="bi bi-chevron-left "></i> Back</a>
           </div>
          </div>
          <div className="container">
            <div className="top-lable">
                <div className="custom-badge-box bg-warning text-white fw-bold">
                    8:00AM - 5:45PM
                 </div>
                 <div class="name-title name-new-title">
                  <h6><span class="gradiant-text">Leela Kanakala | Dennis Goh | Siwat Tantikul | Nattie Wongnara
                 </span></h6>
               </div>
            </div>
            <div className="pavilion-box">
                <div className="pavilion-img-box">
                    <img src="/assets/image/pavilion-1.png" alt=""/>
                    <h4>Immerse Pavilion</h4>
                </div>
                <div><p className="des-pavilion">Experience the power of Cloudflare's Connectivity Cloud in
                    action at our <strong>Connect, Protect, and Build</strong> Solutions Hub. See
                    firsthand how our intelligent, global cloud network is
                    purpose-built for <strong>security, speed, and reliability</strong>—helping
                    you seamlessly <strong>connect users, apps, clouds, and networks,
                    protect everything you connect to the Internet</strong>, and <strong>build
                    and scale </strong>applications with confidence. Engage with
                    Cloudflare solutions engineering team, and discover how to
                    future-proof your digital ecosystem. <strong>Don't miss Cloudflare
                    Radar</strong>, our real-time global traffic network showcasing the
                    latest threat trends, DDoS insights, and internet intelligence
                    shaping the cybersecurity landscape.</p>
                </div>
                <div className="mt-5">
                    <img src="/assets/image/ImmersePavilion.png" alt="" />
                </div>
                <div class="pavilion-inner-box">
                  <div class="pavilion-new-box">
                    <div class="pavilion-inner mb-4">
                        <div class="pavilion-content-box">
                            <img src="/assets/image/Connect.png" alt=""/>
                            <h4>Connect</h4>
                            <h6>your users and apps</h6>
                            <p>Modernize your network, and
                                protect your workforce against
                                phishing and email attacks. Secure
                                corporate applications and web
                                browsing. Accelerate your journey
                                to Zero Trust and SASE/SSE today.</p>
                        </div>
                    </div>
                    <div class="pavilion-inner mb-4">
                        <div class="pavilion-content-box">
                            <img src="/assets/image/Protect.png" alt=""/>
                            <h4>Protect</h4>
                            <h6>and accelerate websites</h6>
                            <p>Use our industry-leading WAF
                                DDoS, and bot protection to
                                protect your websites, apps, and
                                APIs while accelerating
                                performance with our ultra-fast CDN.</p>
                        </div>
                    </div>
                  </div>
                  <div class="pavilion-new-box">
                    <div class="pavilion-inner mb-4">
                        <div class="pavilion-content-box">
                            <img src="/assets/image/Build.png" alt=""/>
                            <h4>Build</h4>
                            <h6>and scale applications</h6>
                            <p>Build modern AI and Internet
                                applications, and scale them
                                easily from one user to billions.
                                Enjoy generous free tiers,
                                transparent pricing, and no egress
                                fees. It's the fastest path from
                                writing to deploying code.</p>
                        </div>
                    </div>
                    <div class="pavilion-inner mb-4">
                        <div class="pavilion-content-box">
                            <img src="/assets/image/Cloudflare.png" alt=""/>
                            <h4>Cloudflare Radar</h4>
                            <h6>real-time intelligence on emerging threats</h6>
                            <p>Track the latest AI trends and
                                insights with Cloudflare Radar.
                                Understand traffic trends,
                                compare the popularity of GenAl
                                services, and track AI bot
                                restrictions over time.</p>
                        </div>
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
export default ImmersePavillion;