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
import Builder3Modal from "../../modals/builders/builder3modal";
import Builder4Modal from "../../modals/builders/builder4modal";


const ImmerseBuilders = () => {
     const navigate = useNavigate();
    const [page , setPage] = useState(1);
    const [builder1Visible, setBuilder1Visible] = useState(false);
    const [builder2Visible, setBuilder2Visible] = useState(false);
    const [builder3Visible, setBuilder3Visible] = useState(false);
    const [builder4Visible, setBuilder4Visible] = useState(false);

    useEffect(()=>{
        if(getToken() == null){
            destroySession()
            navigate("/login")
        }
    },[])
      const togglePage = (_page) => {
        if (_page === "p" && page > 1) {
          setPage(prev => prev - 1);
        } else if (_page === "n" && page < 2) {
          setPage(prev => prev + 1);
        } else if (typeof _page === "number") {
          setPage(_page);
        }
      };

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
            <h2 className="builder-title-grad"><span className="gradiant-text">Immerse Builders' Series</span> </h2>
            <h3 className="builder-agenda-title">Agenda</h3>
          <div className="builder-page agenda-detail-section ">
              {page == 1 &&
          <div className="agenda-deatail">
          
            <div className="agenda-box">
              <div className="box-two row">
                <div className="col-8 pe-0">
                  <div className="clock-div">
                    <div className="clock-inner-div">
                      <img src="/assets/image/Clock.png" alt=""/><p>8:30 AM - 08:50 AM</p>
                    </div>
                    <div className="clock-inner-div">
                      <img src="/assets/image/location.png" alt=""/><p>Regency |</p>
                    </div>
                  </div>
                  <p className="desc">Pacific Tech APAC Distributor <br/> and Cyber Security</p>
                </div>
                  <div className="col-4"><h6>Paramet <br/>Keeratichairitnara,</h6><p>Country Manager,<br /> Pacific Tech </p>
                  </div>
              </div>
            </div>
            <div className="agenda-box">
              <div className="box-two row">
                <div className="col-8 pe-0">
                  <div className="clock-div">
                    <div className="clock-inner-div">
                      <img src="/assets/image/Clock.png" alt=""/><p>8:50 AM - 09:10 AM</p>
                    </div>
                    <div className="clock-inner-div">
                      <img src="/assets/image/location.png" alt=""/><p>Regency |</p>
                    </div>
                  </div>
                  <p className="desc">Application Security</p>
                </div>
                  <div className="col-4"><h6>Anh Luu,</h6><p>Regional Solutions Engineer,<br />
                   Cloudflare Philippines <br/>and Vietnam </p>
                  </div>
              </div>
            </div>
            <div className="agenda-box">
              <div className="box-two row">
                <div className="col-8 pe-0">
                  <div className="clock-div">
                    <div className="clock-inner-div">
                      <img src="/assets/image/Clock.png" alt=""/><p>09:10 AM - 9:30 AM</p>
                    </div>
                    <div className="clock-inner-div">
                      <img src="/assets/image/location.png" alt=""/><p>Regency I</p>
                    </div>
                  </div>
                  <p className="desc">API Security</p>
                  <button type="button" onClick={()=>setBuilder1Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                </div>
                  <div className="col-4"><h6>Parkpoom <br/>Pornpratanwech,</h6><p>  Senior Associate<br />Technical Architect, <br/>NTT Data </p>
                  </div>
              </div>
            </div>
            <div className="agenda-box">
              <div className="box-two row">
                <div className="col-8 pe-0">
                  <div className="clock-div">
                    <div className="clock-inner-div">
                      <img src="/assets/image/Clock.png" alt=""/><p>10:45 AM - 11:05 AM</p>
                    </div>
                    <div className="clock-inner-div">
                      <img src="/assets/image/location.png" alt=""/><p>Regency I</p>
                    </div>
                  </div>
                  <p className="desc">Seamless Integration of Cloudflare One<br />and Application Services for Modern Enterprises</p>
                  <button type="button" onClick={()=>setBuilder2Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
                </div>
                  <div className="col-4"><h6>Nattavut Meethong,</h6><p>nForce </p>
                  </div>
              </div>
            </div>
              <div className="agenda-box">
                <div className="box-two row">
                  <div className="col-8 pe-0">
                    <div className="clock-div">
                      <div className="clock-inner-div">
                        <img src="/assets/image/Clock.png" alt=""/><p>12:40 PM - 1:00 PM</p>
                      </div>
                      <div className="clock-inner-div">
                        <img src="/assets/image/location.png" alt=""/><p>Regency I</p>
                      </div>
                    </div>
                    <p className="desc">Journey to Zero Trust </p>
                      
      
                  </div>
                    <div className="col-4"><h6>Leela Kanakala,</h6><p>Regional Senior<br />
                         Solutions Specialist, <br /> Cloudflare APJC<br /></p>
                    </div>
                </div>
              </div>
              <div className="agenda-box">
                <div className="box-two row">
                  <div className="col-8 pe-0">
                    <div className="clock-div">
                      <div className="clock-inner-div">
                        <img src="/assets/image/Clock.png" alt=""/><p>1:00 PM - 1:20 PM</p>
                      </div>
                      <div className="clock-inner-div">
                        <img src="/assets/image/location.png" alt=""/><p>Regency |</p>
                      </div>
                    </div>
                    <p className="desc">Onboarding Zero Trust with Cloudflare WARP </p>
                      <button type="button" onClick={()=>setBuilder3Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
      
                  </div>
                    <div className="col-4"><h6>Bodeethorn <br/> Sirakantarat</h6><p>Senior Associate <br />
                    Technical Architect, <br/>NTT Data</p>
                    </div>
                </div>
              </div>
            </div>
              }
                {page == 2 &&
                       <div className="agenda-detail">
                   <div className="agenda-box">
                <div className="box-two row">
                  <div className="col-8 pe-0">
                    <div className="clock-div">
                      <div className="clock-inner-div">
                        <img src="/assets/image/Clock.png" alt=""/><p>2:45 PM - 3:05 PM</p>
                      </div>
                      <div className="clock-inner-div">
                        <img src="/assets/image/location.png" alt=""/><p>Regency |</p>
                      </div>
                    </div>
                    <p className="desc">How SoftDe'but Utilizes Cloudflare Workers <br/>to Fulfil Evolving Customer Expectations </p>
                      <button type="button" onClick={()=>setBuilder4Visible(true)} className="abstact-btn"><img src="/assets/image/message.png" alt=""/><span>View Abstract</span></button>
      
                  </div>
                    <div className="col-4"><h6>Kritsada Kaosumphan,</h6><p>AVP Sales & Marketing,<br />
                    SoftDe'but</p>
                    </div>
                </div>
              </div>        
                   <div className="agenda-box">
                <div className="box-two row align-items-center">
                  <div className="col-8 pe-0">
                    <div className="clock-div">
                      <div className="clock-inner-div">
                        <img src="/assets/image/Clock.png" alt=""/><p>5:00 PM - 5:20 PM</p>
                      </div>
                      <div className="clock-inner-div">
                        <img src="/assets/image/location.png" alt=""/><p>Regency |</p>
                      </div>
                    </div>
                    <p className="desc">Less Complexity, More Connectivity - Branch Connectivity Made Easy  </p>      
                  </div>
                    <div className="col-4">
                    <h6>Leela Kanakala,</h6><p>Regional Senior<br />
                   Solutions Specialist, <br/>Cloudflare APJC</p> 
                    <h6 className="mt-2">Dennis Goh,</h6><p>Principal Specialist<br />
                  Solutions Engineer, <br/>Networking, <br/> Cloudflare APJC</p> 
                    </div>
                </div>
              </div>        
                 <div className="agenda-box">
                <div className="box-two row">
                  <div className="col-8 pe-0">
                    <div className="clock-div">
                      <div className="clock-inner-div">
                        <img src="/assets/image/Clock.png" alt=""/><p>5:20 PM - 5:40 PM</p>
                      </div>
                      <div className="clock-inner-div">
                        <img src="/assets/image/location.png" alt=""/><p>Regency |</p>
                      </div>
                    </div>
                    <p className="desc">Oops-Proof or Just Hoping for the Best? <br/>Are You Protected Against DDoS? </p>
      
                  </div>
                    <div className="col-4"><h6>Siwat Tantikul,</h6><p>Senior Solutions Engineer,<br />
                    Cloudflare Thailand</p>
                    </div>
                </div>
              </div>  
                       </div>
                       }
              <div className="pagination">
                            <a onClick={()=>togglePage("p")} className="nav"><i className="bi bi-chevron-left me-2"></i> Earlier</a>
                            <a onClick={()=>togglePage(1)} className={`page-number ${page == 1 ? "active" : ""}`}>1</a>
                            <a onClick={()=>togglePage(2)} className={`page-number ${page == 2 ? "active" : ""}`}>2</a>
                            <a onClick={()=>togglePage("n")} className="nav">Later <i className="bi bi-chevron-right ms-2"></i></a>
                        </div>
                       
        </div>
        </div>
       </section>

        {builder1Visible && <Builder1Modal show={builder1Visible} handleClose={setBuilder1Visible} />}
        {builder2Visible && <Builder2Modal show={builder2Visible} handleClose={setBuilder2Visible} />}
        {builder3Visible && <Builder3Modal show={builder3Visible} handleClose={setBuilder3Visible} />}
        {builder4Visible && <Builder4Modal show={builder4Visible} handleClose={setBuilder4Visible} />}
        <Footer />
    </div>
    )
}
export default ImmerseBuilders;