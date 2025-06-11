import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getPassport, getToken, hideLoading, loadError, loadSuccess, setToken, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";


const ImmerseIndustries = () => {
    const navigate = useNavigate();
    const [page , setPage] = useState(1);
    const [abstract1Visible, setAbstract1Visible] = useState(false);
  
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
                 <div class="name-title name-new-title">
                    <h6><span class="gradiant-text">Claire Lim</span> <span class="pav-dashed"> | </span>
                        <span class="gradiant-text">Ayush Verma</span></h6>
                 </div>
            </div>
            <div className="pavilion-box">
                <div className="pavilion-img-box">
                    <img src="/assets/image/pavilion-2.png" alt=""/>
                    <h4>Immerse for<br />
                        Industries Pavilion</h4>
                </div>
                <div><p className="des-pavilion">Discover how industry practitioners are transforming their
                    businesses with Cloudflare. This dedicated pavilion
                    showcases <strong>industry-specific use cases, purpose-built
                    solutions, and real-world success stories</strong> through
                    interactive demos and lightning talks. Engage directly with
                    Cloudflare solutions architect team and peers from
                   <strong> Financial Services, Public Sector,</strong> and beyond to explore
                    how cutting-edge security, performance, and connectivity
                    solutions are driving innovation and resilience
                    across industries.</p>
                </div>

                <div className="pavilion-inner-box">

                <div class="pavilion-inner mb-4">
                        <img class="pav-img" src="/assets/image/ImmerseIndustries1.png" alt=""/>
                        <div class="pavilion-content-box">
                            <h4>FSI</h4>
                            <h6>Cloudflare for Financial Services.
                              AI-Powered.</h6>
                            <p>Powering AI in Banking.</p>
                            <p>Powering AI in Payment Services.</p>
                            <p>Powering AI in Crypto Exchange.</p>
                        </div>
                    </div>
                    <div class="pavilion-inner mb-4">
                        <img class="pav-img" src="/assets/image/ImmerseIndustries2.png" alt=""/>
                        <div class="pavilion-content-box">
                            <h4>Public Sector</h4>
                            <h6>Bulk Tender reference architecture.<br/>
                              GovTech SEED (ZT use case)<br/>
                              Synapxe (Advanced App Sec use case)</h6>
                              <p>Securing Application, Security and
                              Network Modernization.
                              Securing Cloud Remote Access
                              with Zero Trust.
                              Securing Healthcare Agencies
                              with Critical Infrastructure.</p>
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
export default ImmerseIndustries;