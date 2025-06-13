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
                            <div className="sponsor-img col-4">
                                <img src="/assets/image/spon1.png" alt=""/>
                            </div>
                            <div className="shout-out-des col-8">
                                <p>Letʼs talk secure transformation. NTT DATA helps
                                enterprises move fast and stay secure. Visit our
                                booth to learn how we enable confident
                                innovation and receive exclusive freebies!</p>
                                    <a href="/app/sponsors/pacific-tech" className="gradiant-button btn"> View Full Profile
                                    <i className="bi bi-chevron-right"></i></a>
                            </div>
                        </div>

                        <div className="all-sponsor-title mb-2 mt-4"><h3>Gold Sponsor </h3></div>
                   <div className="sponsor-inner-box row mb-3 align-items-center">
                            <div className="sponsor-img col-4">
                                <img src="/assets/image/spon2.png" alt=""/>
                            </div>
                            <div className="shout-out-des col-8">
                                <p>Modernize your network, Secure corporate
                                applications and web browsing. Accelerate your
                                journey to Zero Trust and SASE/SSE today by
                                nForce Secure. </p>
                                    <a href="/app/sponsors/sumo-logic" className="gradiant-button btn"> View Full Profile
                                    <i className="bi bi-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="sponsor-inner-box mb-2 row align-items-center">
                            <div className="sponsor-img col-4">
                                <img src="/assets/image/sponsoer3.png" alt=""/>
                            </div>
                            <div className="shout-out-des col-8">
                                <p>Experience trusted cybersecurity and data
                                protection with Pacific Tech. Visit our booth for
                                expert advice and exclusive giveaways.</p>
                                <a href="/app/sponsors/westcon" className="gradiant-button btn"> View Full Profile
                                <i className="bi bi-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="sponsor-inner-box mb-2 row align-items-center">
                            <div className="sponsor-img col-4">
                                <img src="/assets/image/sponsoer4.png" alt=""/>
                            </div>
                            <div className="shout-out-des col-8">
                                <p>Visit Us at SoftDeʼbut booth and talk with our
                        subject matter experts. We are ready to support
                        you, don't miss our exclusive giveaways!</p>
                                <a href="/app/sponsors/westcon" className="gradiant-button btn"> View Full Profile
                                <i className="bi bi-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="all-sponsor-title mb-2 mt-4"><h3>Bronze Sponsor </h3></div>
                        <div className="sponsor-inner-box row align-items-center">
                            <div className="sponsor-img col-4">
                                <img src="/assets/image/spon5.png" alt=""/>
                            </div>
                            <div className="shout-out-des col-8">
                                    <p>Discover how Cloudflare One simplifies SASE
                                with seamless Zero Trust, SWG, and
                                DLP—secure, fast, and scalable.  </p>
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