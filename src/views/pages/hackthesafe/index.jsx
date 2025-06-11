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
            <img src="/assets/image/logo-sin.png" alt="" className="mx-auto logo-sec"/>
            <div className="back-btn">
              <a href="/app"><i className="bi bi-chevron-left "></i> Back</a>
           </div>
          </div>
          <div className="container">
             <h2 className="builder-title-grad"><span className="gradiant-text">AI Hub </span> </h2>
             <h3 className="builder-agenda-title mt-3">Hack The Safe </h3>
             <h4 className='hack-safe-h4'>Decode the Cloud Vault!</h4>
             <p className="des-pavilion">(change the name from Hack the Safe to this) <br/>The AI holds the key — can you crack it in time?</p>
             <p className="des-pavilion">Calling all developers, cybersecurity bounty hunters, and
             curious minds — step up to the <strong> Hack the Safe Challenge </strong> at the AI Hub booth, powered by Cloudflare AI Workers. </p>
             <p className="des-pavilion">Your mission: engage with our AI chatbot, crack the smartest prompts, and retrieve the elusive 4-digit code to unlock the vault.</p>
             <p className="des-pavilion">But hereʼs the twist — the vault only opens during limited hours.
             </p>
             <p className="des-pavilion">Whatʼs inside? A rare prize reserved for only the sharpest minds.
             <strong>Think fast. Prompt smart. Outsmart the machine.</strong></p>
             <ul className='hack-safe-list'>
                <li>SLOT 1:<div className="custom-badge-box bg-warning text-white fw-bold">
                <img src="/assets/image/Clock.png" alt="" />    1:00 PM
                 </div></li>
                <li>SLOT 2:<div className="custom-badge-box bg-warning text-white fw-bold">
                <img src="/assets/image/Clock.png" alt="" />     5:00 PM
                 </div></li>
             </ul>
             <div className="hack-img-list">
             <div className="row">
                <div className="col-4">
                  <div className="img-list-info">
                    <img src="/assets/image/1stPrize.png" alt="" />
                    <div className="img-info-data">
                        <h3>1st Prize</h3>
                        <p>GravaStar Mars Pro  Bluetooth Speaker</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="img-list-info">
                    <img src="/assets/image/2ndPrize.png" alt="" />
                    <div className="img-info-data">
                        <h3>2nd Prize</h3>
                        <p>65W Fast Charge Hub</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="img-list-info">
                    <img src="/assets/image/3rdPrize.png" alt="" />
                    <div className="img-info-data">
                        <h3>3rd Prize</h3>
                        <p>Retro Gaming Console</p>
                    </div>
                  </div>
                </div>
             </div>
             </div>
             <h3 className='hack-h3'>Demo Sessions</h3>
             <div className="agenda-detail-section">
             <div className="agenda-box">
                            <div className="box-two row">
                                <div className="col-7 pe-0">
                                <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>09:00 AM - 9:20 AM </p></div>
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
                                <div className="clock-div"><img src="/assets/image/Clock.png" alt=""/><p>11:00 AM - 11:20 AM  </p></div>
                                <p className="desc">The Guardians of the Cloud: <br />
                                Firewalls, Cloudy & Guardrails </p>
                                </div>
                                <div className="col-5"><h6>Claire Lim,</h6><p>Specialist Solutions  <br /> Engineer,<br/>Cloudflare ASEAN </p>
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