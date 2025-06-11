import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getPassport, getToken, hideLoading, loadError, loadSuccess, setToken, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";


const ImmerseMain = () => {
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
                    <a href="/app"><i className="bi bi-chevron-left "></i> Back</a>
                </div>
                </div>
                <div className="container">
                    <h2><span className="gradiant-text">Directory </span> </h2>
                    <div className="immerse-main-box">
                    <div className="immerse-box orange-box">
                        <div className="first-div">
                        <div className="image-box">
                            <img src="/assets/image/box-1.png" alt=""/>
                        </div>
                        <div className="title-box"> 
                            <h4>Immerse <br />Pavilion</h4>
                        </div>
                        </div>
                        <div className="sec-div">
                        <div className="list-box">
                            <ul>
                                <li>Connect <span>|</span> </li> 
                                <li>Protect <span>|</span> </li> 
                                <li>Build <span>|</span> </li> 
                                <li>Cloudflare Radar</li>
                            </ul>
                        </div>
                        <div className="arrow-box">
                            <a href="/app/immerse-pavillion"><img src="/assets/image/arrow-white.png" alt=""/></a>
                        </div>
                        </div>
                        </div>
                    <div className="immerse-box white-box">
                        <div className="first-div">
                        <div className="image-box">
                            <img src="/assets/image/box-2.png" alt=""/>
                        </div>
                        <div className="title-box"> 
                            <h4>Immerse for
                            <br />Industries Pavilion</h4>
                        </div>
                        </div>
                        <div className="sec-div">
                        <div className="list-box">
                            <ul>
                                <li>FSI <span>|</span> </li> 
                                <li>Public Sector </li> 
                                
                            </ul>
                        </div>
                        <div className="arrow-box">
                            <a href="/app/immerse-industries"><img src="/assets/image/arrow-orange.png" alt=""/></a>
                        </div>
                        </div>
                    </div>
                    <div className="immerse-box orange-box">
                        <div className="first-div">
                        <div className="image-box">
                            <img src="/assets/image/box-3.png" alt=""/>
                        </div>
                        <div className="title-box"> 
                            <h4>Cloudflare AI Hub
                            <br /> (Developer Community Hub) </h4>
                        </div>
                        </div>
                        <div className="sec-div">
                        <div className="list-box">
                        </div>
                        <div className="arrow-box">
                            <a href="/app/cloudflare"><img src="/assets/image/arrow-white.png" alt=""/></a>
                        </div>
                        </div>
                        </div>
                    <div className="immerse-box white-box">
                        <div className="first-div">
                        <div className="image-box">
                            <img src="/assets/image/box-4.png" alt=""/>
                        </div>
                        <div className="title-box"> 
                            <h4>Immerse
                            <br />Builders' Sessions</h4>
                        </div>
                        </div>
                        <div className="sec-div">
                        <div className="list-box">
                        </div>
                        <div className="arrow-box">
                            <a href="/app/immerse-builders-sessions"><img src="/assets/image/arrow-orange.png" alt=""/></a>
                        </div>
                        </div>
                    </div>
                    <div className="immerse-box orange-box">
                        <div className="first-div">
                        <div className="image-box">
                            <img src="/assets/image/box-5.png" alt=""/>
                        </div>
                        <div className="title-box"> 
                            <h4>Immerse VIP Lounge</h4>
                        </div>
                        </div>
                        <div className="sec-div">
                        <div className="list-box">
                        </div>
                        <div className="arrow-box">
                            <a href="/app/immerse-customer-spotlight"><img src="/assets/image/arrow-white.png" alt=""/></a>
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
export default ImmerseMain;