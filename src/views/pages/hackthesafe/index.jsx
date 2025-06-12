import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { destroySession, getToken,  } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";


const HackTheSafe = () => {
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
              <a href="/app"><i className="bi bi-chevron-left "></i> Back</a>
           </div>
          </div>
          <div className="container">
             <h2 className="builder-title-grad"><span className="gradiant-text">AI Hub </span> </h2>
             <h3 className="builder-agenda-title mt-3">Hack The Safe </h3>
             <h4 className='hack-safe-h4'><strong>Decode the Cloud Vault!</strong></h4>
             <p className="des-pavilion mt-0">The AI holds the key — can you crack it in time?</p>
             <p className="des-pavilion">Calling all developers, cybersecurity bounty hunters, and
             curious minds — step up to the <strong> Hack the Safe Challenge </strong> at the AI Hub booth, powered by Cloudflare AI Workers. </p>
             <p className="des-pavilion">Your mission: engage with our AI chatbot, crack the smartest prompts, and retrieve the elusive 4-digit code to unlock the vault.</p>
             <p className="des-pavilion">But hereʼs the twist — the vault only opens during limited hours.
             </p>
             <p className="des-pavilion">Whatʼs inside? A rare prize reserved for only the sharpest minds.
             <strong>Think fast. Prompt smart. Outsmart the machine.</strong></p>
             <ul className='hack-safe-list'>
                <li>SLOT 1:<div className="custom-badge-box bg-warning text-white fw-bold">
                <img src="/assets/image/Clock.png" alt="" />   12:40 PM
                 </div></li>
                <li>SLOT 2:<div className="custom-badge-box bg-warning text-white fw-bold">
                <img src="/assets/image/Clock.png" alt="" />  5:00 PM
                 </div></li>
             </ul>
             <div className="gravstar-info">
               <div className="custom-badge-box text-white px-5">Prize</div>
                <div className="gravstar-data row align-items-center">
                <div className="col-6">
                  <img src="/assets/image/gravtar.png" alt="" />
                </div>
                <div className="col-6">
                  <h3>GravaStar G5 <br/> Bluetooth Speaker</h3>
                </div>
                </div>
             </div>
             <h3 className='hack-h3'>Demo Sessions</h3>
             <div className="agenda-detail-section">
             <div className="agenda-box">
                            <div className="box-two row">
                                <div className="col-7 pe-0">
                                <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>10:45 AM - 11:05 AM </p></div>
                                <p className="desc">Securing your AI apps / <br />
                                workloads with Zero Trust </p>
                                </div>
                                <div className="col-5"><h6>Leela Kanakala,</h6><p>Regional Senior <br /> Solutions Specialist,<br/>Cloudflare </p>
                                </div>
                            </div>
                            </div>
             <div className="agenda-box">
                            <div className="box-two row">
                                <div className="col-7 pe-0">
                                <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>12:50 AM - 1:10 AM  </p></div>
                                <p className="desc">The Guardians of the Cloud: <br />
                                Firewalls, Cloudy & Guardrails </p>
                                </div>
                                <div className="col-5"><h6>Claire Lim,</h6><p>Specialist Solutions  <br /> Engineer,<br/>Cloudflare </p>
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
export default HackTheSafe;