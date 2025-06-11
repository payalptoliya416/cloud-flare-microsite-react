import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getPassport, getToken, hideLoading, loadError, loadSuccess, setToken, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Builder1Modal from "../../modals/builders/builder1modal";
import Builder2Modal from "../../modals/builders/builder2modal";


const ImmerseBuilders = () => {
    const navigate = useNavigate();
    const [builder1Visible, setBuilder1Visible] = useState(false);
    const [builder2Visible, setBuilder2Visible] = useState(false);

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
            <h2 className="builder-title-grad"><span className="gradiant-text">Immerse Builders' Series</span> </h2>
            <h6 className="builder-short-des">Short Description</h6>
            <h3 className="builder-agenda-title">Agenda</h3>
          <div className="builder-page agenda-detail-section ">
            
          <div className="agenda-deatail">
          
            <div className="agenda-box">
              <div className="box-two row">
                <div className="col-8 pe-0">
                  <div className="clock-div">
                    <div className="clock-inner-div">
                      <img src="/assets/image/Clock.png" alt=""/><p>8:50 AM - 09:10 AM</p>
                    </div>
                    <div className="clock-inner-div">
                      <img src="/assets/image/location.png" alt=""/><p>Ballroom 3 Foyer</p>
                    </div>
                  </div>
                  <p className="desc">Protecting acmecorp. Work with ease</p>
                </div>
                  <div className="col-4"><h6>Sze Rong Tham</h6><p>Solution Engineer,<br />
                    Cloudflare ASEAN </p>
                  </div>
              </div>
            </div>

            <div className="agenda-box">
              <div className="box-two row">
                <div className="col-8 pe-0">
                  <div className="clock-div">
                    <div className="clock-inner-div">
                      <img src="/assets/image/Clock.png" alt=""/><p>9:00 AM - 09:30 AM</p>
                    </div>
                    <div className="clock-inner-div">
                      <img src="/assets/image/location.png" alt=""/><p>Ballroom 3 Foyer</p>
                    </div>
                  </div>
                  <p className="desc">Cloudflare Health a heck pb<br />Cyntra AIʼs Deep Scan: Rethinking the<br />Cloudflare Health Check Experience</p>
                  <button type="button" onClick={()=>setBuilder2Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                </div>
                  <div className="col-4"><h6>Nima Saraf,</h6><p>VP Sales and Services,<br />
                    Pacific Tech </p>
                  </div>
              </div>
            </div>
            <div className="agenda-box">
              <div className="box-two row">
                <div className="col-8 pe-0">
                  <div className="clock-div">
                    <div className="clock-inner-div">
                      <img src="/assets/image/Clock.png" alt=""/><p>11:00 AM - 11:20 AM</p>
                    </div>
                    <div className="clock-inner-div">
                      <img src="/assets/image/location.png" alt=""/><p>Ballroom 3 Foyer</p>
                    </div>
                  </div>
                  <p className="desc">Acmecorp: journey to Zero Trust</p>
                </div>
                  <div className="col-4"><h6>Edwin Wong</h6><p>Specialist Solutions<br />
                    Engineer (Zero Trust)<br />Cloudflare </p>
                  </div>
              </div>
            </div>
            <div className="agenda-box">
              <div className="box-two row">
                <div className="col-8 pe-0">
                  <div className="clock-div">
                    <div className="clock-inner-div">
                      <img src="/assets/image/Clock.png" alt=""/><p>12:50 AM - 01:10 PM</p>
                    </div>
                    <div className="clock-inner-div">
                      <img src="/assets/image/location.png" alt=""/><p>Ballroom 3 Foyer</p>
                    </div>
                  </div>
                  <p className="desc">Optimizing Performance and Security:<br />Unlocking End-to-End Insights with Cloudflare<br />and Sumo Logic</p>
                  <button type="button" onClick={()=>setBuilder1Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                </div>
                  <div className="col-4"><h6>Praveen
                  John Kumar</h6><p>Lead Solutions Engineer,<br />
                  Sumologic | TechDirect </p>
                  </div>
              </div>
            </div>
           
              <div className="agenda-box">
                <div className="box-two row">
                  <div className="col-8 pe-0">
                    <div className="clock-div">
                      <div className="clock-inner-div">
                        <img src="/assets/image/Clock.png" alt=""/><p>1:10 PM - 1:30 PM</p>
                      </div>
                      <div className="clock-inner-div">
                        <img src="/assets/image/location.png" alt=""/><p>Ballroom 3 Foyer</p>
                      </div>
                    </div>
                    <p className="desc">Less Complexity, More Connectivity - <br />
                      Branch Connectivity Made Easy
                    </p>
                      
      
                  </div>
                    <div className="col-4"><h6>Edwin Wong</h6><p>Specialist Solution<br />
                          Engineer (Zero Trust), <br />
                          Cloudflare<br /></p>
                                
                          <div className="mt-1"><p><strong style={{fontWeight: 600}}>Dennis Goh<br /></strong>Principal Solutions Architect,<br />
                            Cloudflare APAC<br /></p>
                          </div>
                    </div>
                </div>
              </div>
           
            
              <div className="agenda-box">
                <div className="box-two row">
                  <div className="col-8 pe-0">
                    <div className="clock-div">
                      <div className="clock-inner-div">
                        <img src="/assets/image/Clock.png" alt=""/><p>4:50 PM - 5:10 PM</p>
                      </div>
                      <div className="clock-inner-div">
                        <img src="/assets/image/location.png" alt=""/><p>Ballroom 3 Foyer</p>
                      </div>
                    </div>
                    <p className="desc">Oops-Proof or Just Hoping for the Best?<br />
                      Are You Protected Against DDoS?
                    </p>
                      {/* <button type="button" onClick={()=>setBuilder1Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button> */}
      
                  </div>
                    <div className="col-4"><h6>Dennis Goh</h6><p>Principal Solutions Architect,<br />
                    Cloudflare APAC</p>
                    </div>
                </div>
              </div>
            

            </div>
        </div>
        </div>
       </section>

        {builder1Visible && <Builder1Modal show={builder1Visible} handleClose={setBuilder1Visible} />}
        {builder2Visible && <Builder2Modal show={builder2Visible} handleClose={setBuilder2Visible} />}
        <Footer />
    </div>
    )
}
export default ImmerseBuilders;