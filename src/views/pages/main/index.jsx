import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getCandy, getPassport, getToken, hideLoading, loadError, loadSuccess, setToken, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

const Main = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
  
    useEffect(()=>{
        if(getToken() == null){
            destroySession()
            navigate("/login")
        }else{
            checkPassport()
        }
    },[])
  
    const checkPassport = () =>{
        showLoading("Checking Passport...")
        Axios.post(`${APIHOST}event/checkPassport`, {
            candy : getCandy()
        }).then(function(res){
            hideLoading()
            let {data} = res;
            setName(getAttendee())
        }).catch(function(er){
            hideLoading()
            if(typeof(er.response) !== "undefined"){
                if(er.response.status == 404 || er.response.status == 500){
                    actionError(er.response.data.error ?? er.response.data.message, checkPassport)
                }else{
                    actionError("A network error occured.", checkPassport)
                }
            }else{
                actionError(er.message, checkPassport)
            }
        })
    }

    return (
        <div className="main" id="topnav">
            <div className="micro-logo">
                <img src="/assets/image/logoone.png" alt="" className="mx-auto micro-one"/>
                <img src="/assets/image/logosec.png" alt="" className="mx-auto micro-sec"/>
                <div className="back-btn">
                <a href="/app"><i className="bi bi-chevron-left "></i> Back</a> 
                </div>
                <div className="micro-home-title">
                    <h2>Powering the future of</h2>
                    <h2>application,security and <br/> network modernization</h2>
                </div>
            </div>  
            <div className="container">
                <div className="micro-home-content">
                    <h4 className="welcom-text">Welcome, {name}!</h4>
                    <h2 className="gradiant-text">Explore the Cloudflare Event Hub</h2>
                    <div className="explore-tab">
                        <a href="/app/agenda" className="explore-tab-info">
                            <img src="/assets/image/Agenda.png" alt=""/>
                            <h3>Agenda</h3>
                        </a>
                        <a href="/app/speakers" className="explore-tab-info">
                            <img src="/assets/image/Speakers.png" alt=""/>
                            <h3>Speakers</h3>
                        </a>
                        <a href="/app/sponsors" className="explore-tab-info">
                            <img src="/assets/image/Sponsors.png" alt=""/>
                            <h3>Sponsors</h3>
                        </a>
                        <a href="/app/immerse-main" className="explore-tab-info">
                            <img src="/assets/image/Immerse Pavillion.png" alt=""/>
                            <h3>Immerse <br/> Pavillion</h3>
                        </a>
                        <a href="/app/news" className="explore-tab-info">
                            <img src="/assets/image/News & Resources.png" alt=""/>
                            <h3>News & <br/> Resources</h3>
                        </a>
                        <a href="/app/passport" className="explore-tab-info">
                            <img src="/assets/image/Passport Program.png" alt=""/>
                            <h3>Passport <br/> Program</h3>
                        </a>
                        
                    </div>
                    <div className="session-detail mb-5">
                        <h2 className="gradiant-text">Sessions Type</h2>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <div className="session-info  h-100">
                                <img src="/assets/image/Image 1.jpg" style={{minHeight : 104}} alt="" className="sesson-top-img"/>
                                    <div className="session-content">
                                        <h3>Immerse Buildersʼ <br/> Series</h3>
                                        <a href="/app/immerse-builders"><button className="gradiant-button btn"> View Details<i className="bi bi-chevron-right"></i></button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="session-info  h-100">
                                <img src="/assets/image/Image 2.png" alt="" className="sesson-top-img"/>
                                    <div className="session-content">
                                        <h3>AI Hub</h3>
                                        <a href="/app/hack-the-safe"><button className="gradiant-button btn"> View Details<i className="bi bi-chevron-right"></i></button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="session-info  h-100">
                                <img src="/assets/image/Image 3.jpg" style={{minHeight : 104}} alt="" className="sesson-top-img"/>
                                    <div className="session-content">
                                        <h3>Immerse<br/>Pavillion</h3>
                                        <a href="/app/immerse-main"><button className="gradiant-button btn"> View Details<i className="bi bi-chevron-right"></i></button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="session-info  h-100">
                                <img src="/assets/image/VIP_Lounge.png" alt="" className="sesson-top-img"/>
                                    <div className="session-content">
                                        <h3>Immerse VIP<br/>Lounge</h3>
                                        {/* <a href="#" target="_blank"><button className="checkout-btn btn"> Check It Out <img src="/assets/image/arrow01.png" alt="" className="ms-1"/></button></a> */}
                                        <a href="/app/immerse-customer-spotlight"><button className="gradiant-button btn"> View Details<i className="bi bi-chevron-right"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="session-detail">
                        <h2 className="gradiant-text">Ancillary Program</h2>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <div className="session-info  h-100">
                                <img src="/assets/image/Image 5.png" alt="" className="sesson-top-img"/>
                                    <div className="session-content">
                                        <h3>Executive Trust<br/>Dialogue & Luncheon</h3>
                                        <a href="/app/trust-forward"><button className="gradiant-button btn"> View Details<i className="bi bi-chevron-right"></i></button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="session-info  h-100">
                                <img src="/assets/image/Image 6.png" alt="" className="sesson-top-img"/>
                                    <div className="session-content">
                                        <h3>Partner Forum </h3>
                                        <a href="https://cloudflare-immerse-partner-forum-singapore.splashthat.com/" target="_blank"><button className="checkout-btn btn"> Check It Out <img src="/assets/image/arrow01.png" alt="" className="ms-1"/></button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="session-info  h-100">
                                <img src="/assets/image/Image 7.png" alt="" className="sesson-top-img"/>
                                    <div className="session-content">
                                        <h3>BlazeHack  Developer<br/> Test Flight</h3>
                                        <a href="https://www.reg-events.com/cloudflare-blazehack" target="_blank"><button className="checkout-btn btn"> Check It Out <img src="/assets/image/arrow01.png" alt="" className="ms-1"/></button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="session-info  h-100">
                                <img src="/assets/image/Image 8.png" alt="" className="sesson-top-img"/>
                                    <div className="session-content">
                                        <h3>FinServ Leadership<br/>Insights</h3>
                                        <a href="https://www.reg-events.com/cloudflare-finserv-leadership-insights-2025?utm_source=linkedin&utm_medium=organic-social&utm_campaign=immerse_sg_6_reasons" target="_blank"><button className="checkout-btn btn"> Check It Out <img src="/assets/image/arrow01.png" alt="" className="ms-1"/></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#topnav" className="up-error"><img src="/assets/image/up arrow01.png" alt=""/></a>
            </div>
            </div>
            <Footer page="home" />
        </div>
    )
}

export default Main;