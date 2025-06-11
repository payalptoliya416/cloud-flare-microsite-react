import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";
import { actionError, APIHOST, getToken, hideLoading, loadError, loadSuccess, setAttendee, setCandy, setPassport, setToken, showLoading } from "../../../utils/gaia";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const Welcome = () => {
    const navigate = useNavigate();
  
    useEffect(()=>{
        if(urlParams.get("q") == null){
            navigate("/login")
        }else if(getToken()){
            navigate("/app")
        }else{
            checkPassport()
        }
    },[])


    const checkPassport = () =>{
        showLoading("Checking your passport...");
        Axios.post(`${APIHOST}event/init`, {
            passport: urlParams.get("q")
        }).then(function(res){
            hideLoading()
            let {data} = res;
            setToken(data.token)
            setAttendee(data.name)
            setPassport(data.passport)
            setCandy(data.candy)
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
        <div className="main">
        <section className="welcome-page"> 
            <div className="welcome-inner">
                <div className="logo">
                    <img src="/assets/image/logo-sec.png" alt="" className="mx-auto logo-sec"/>
                  </div>
                  <div className="welcome-box-detail container">
                      <h2><span className="gradiant-text">Welcome to <br /> Immerse: ASEAN 2025</span></h2>
                      <p>Select the country for today's event</p>

                  <div className="wlc-detail">
                    <div className="wlc-image-box"> 
                        <div className="wlc-img">
                            <img src="/assets/image/img-1.png" alt=""/>
                        </div>
                        <div className="image-box-detail">
                            <h1>Immerse<br />
                                Singapore</h1>
                            <p>24 April, 2025<br />
                                8:00 AM - 5:45 PM<br />
                                Pan Pacific</p>
                            <a href="/app"><button className="gradiant-button"> Enter This Event <i className="bi bi-chevron-right"></i></button></a>
                        </div>
                    </div>
                    <div className="wlc-image-box"> 
                        <div className="wlc-img">
                            <img src="/assets/image/img-2.png" alt=""/>
                        </div>
                        <div className="image-box-detail">
                            <h1>Immerse
                                <br />
                                Jakarta</h1>
                            <p>16 July, 2025</p>
                            
                        </div>
                    </div>
                    <div className="wlc-image-box"> 
                        <div className="wlc-img">
                            <img src="/assets/image/img-1.png" alt=""/>
                        </div>
                        <div className="image-box-detail">
                            <h1>Immerse<br />
                                Bangkok</h1>
                            <p>16 July, 2025</p>
                            
                        </div>
                    </div>
                    <div className="wlc-image-box"> 
                        <div className="wlc-img">
                            <img src="/assets/image/img-1.png" alt=""/>
                        </div>
                        <div className="image-box-detail">
                            <h1>Immerse<br />
                                Manila</h1>
                            <p>Aug 14, 2025</p>
                            
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Welcome;