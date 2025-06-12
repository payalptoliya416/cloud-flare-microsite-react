import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { destroySession, getToken,  } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";


const ImmerseMain = () => {
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
            <img src="/assets/image/logosec.png" alt="" className="mx-auto logo-sec"/>
            <div className="back-btn">
              <a href="/app/immerse-main"><i className="bi bi-chevron-left "></i> Back</a>
           </div>
          </div>

          <div className="container">
          <div class="top-lable">
               <div class="badge-parent">
                <div class="custom-badge-box bg-warning text-white fw-bold">
                    Morning Reception
                 </div>
                 <div class="custom-badge-box bg-warning text-white fw-bold">
                    Morning Tea Break
                 </div>
                 <div class="custom-badge-box bg-warning text-white fw-bold">
                    Lunch
                 </div>
                 <div class="custom-badge-box bg-warning text-white fw-bold">
                    Aftrernoon Tea Break
                 </div>
               </div>
                 <div class="name-title name-new-title">
                    <h6><span class="gradiant-text">Dennis Goh | Leela Kanakala | Pongpisit Laosuwanwat | Anh Luu | Siwat Tantiku</span></h6>
                 </div>
            </div>
            <div className="pavilion-box">
                <div className="pavilion-img-box">
                    <img src="/assets/image/box-4.png" alt=""/>
                    <h4>Immerse Builders' Sessions<br /></h4>
                </div>
                <div><p className="des-pavilion">The Immerse Buildersʼ Series is an <strong>on-site whiteboarding mini-theater </strong>
                        designed for security and IT practitioners to dive deep into advanced <strong>AppSec, Zero Trust, and AI-driven
                        security strategies</strong>. These <strong>interactive 20-minute sessions</strong>, led by Cloudflare experts and partners, provide
                        <strong>live demonstrations, and real-world insights</strong> to help you master the latest innovations in <strong>cloud security, network
                        modernization, and SASE for Zero Trust platforms. Gain exclusive access to cutting-edge AI-defense solutions</strong>,
                        explore practical approaches to securing modern infrastructures, and walk away with actionable strategies to
                        strengthen your security posture in todayʼs dynamic threat landscape.</p>
                </div>
                <div className="mt-5"><img src="/assets/image/immersebuilderssession.png" alt="" /></div>
            </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}
export default ImmerseMain;