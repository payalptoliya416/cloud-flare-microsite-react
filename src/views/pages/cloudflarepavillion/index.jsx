import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { destroySession, getToken,  } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";


const CloudflarePavillion = () => {
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
            <div className="top-lable">
                <div className="custom-badge-box bg-warning text-white fw-bold">
                    8:00AM - 5:00PM
                 </div>
                 <div class="name-title name-new-title">
                  <h6><span class="gradiant-text">Clement Wong |<br/> Amirul Zharfan Bin Zalid | T.Y. Tan | Sarat Pornwichianwong | Tuangsith </span></h6>
               </div>
            </div>
            <div className="pavilion-box">
                <div className="pavilion-img-box">
                    <img src="/assets/image/pavilion-3.png" alt=""/>
                    <h4>Cloudflare AI Hub<br />
                        <span className="sub-title">(Developer Community Hub)</span></h4>
                </div>
                <div><p className="des-pavilion">Discover how Cloudflare is revolutionizing AI-driven
                    development with powerful applications designed to <strong>boost
                    productivity; streamline coding, and simplify business
                    intelligence. With security and privacy built in</strong>, effortless
                    customization, and seamless data integration, you can
                    quickly harness the power of <strong> AI on Cloudflare</strong>
                    to meet your organization's unique needs. Connect with
                    fellow developers; engage with Cloudflare experts; and
                    explore hands-on use cases that bring AI innovation to life.</p>
                </div>
                <div className="mt-5"><img src="/assets/image/Ai.png" alt="" /></div>
            </div>
            </div>
        </section>
        <Footer />
    </div>
    )
}
export default CloudflarePavillion;