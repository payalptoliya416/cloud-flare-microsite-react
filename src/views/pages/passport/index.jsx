import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getCandy, getPassport, getToken, hideLoading, loadError, loadSuccess, setToken, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { FirstWaveModal, JourneyModal, MasterConceptModal, PacificTechModal, TechDirectModal, WestconModal, AiHubModal, ImmersePavilionModal, IndustriesPavilionModal, IndustriesPavilionPublicModal } from "../../modals/passport";
import { Tab, Tabs } from "react-bootstrap";


const Passport = () => {
    const navigate = useNavigate();
    const [key, setKey] = useState('profile-tab');
    const [mode, setMode] = useState(0);
    const [canDisplay, setCanDisplay] = useState(false)
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const [journeyVisible, setJourneyVisible] = useState(false)
    const [pacificVisible, setPacificVisible] = useState(false)
    const [aiHubVisible, setAiHubVisible] = useState(false)
    const [immersePavilionVisible, setImmersePavilionVisible] = useState(false)
    const [industriesPavilionVisible, setIndustriesPavilionVisible] = useState(false)
    const [industriesPavilionPublicVisible, setIndustriesPavilionPublicVisible] = useState(false)
    const [techDirectVisible, setTechDirectVisible] = useState(false)
    const [firstWaveVisible, setFirstWaveVisible] = useState(false)
    const [masterConceptVisible, setMasterConceptVisible] = useState(false)
    const [westconVisible, setWestconVisible] = useState(false)

    const [progress, setProgress] = useState({ count : 0, journey : { pacific : false, techdirect : true, firstwave : false, masterconcept : false, westcon : false}})
    useEffect(()=>{
        if(getToken() == null){
            destroySession()
            navigate("/login")
        }else{
            getProgress()
        }
    },[])

    const getProgress = () =>{
        showLoading("Loading My Passport...")
        Axios.post(`${APIHOST}event/getProgress`, {
            candy : getCandy()
        }).then(function(res){
            hideLoading()
            let {data} = res;
            setProgress(data.payload)
            setCanDisplay(true)
        }).catch(function(er){
            hideLoading()
            setError(true)
            if(typeof(er.response) !== "undefined"){
                if(er.response.status == 404 || er.response.status == 500){
                    setErrorMsg(er.response.data.error ?? er.response.data.message)
                }else{
                    setErrorMsg("A network error occured.")
                }
            }else{
                setErrorMsg(er.message)
            }
        })
    }

    const reload = () =>{
        setError(false)
        setErrorMsg("")
        getProgress();
    }

    return (
        <div className="main ">
            {progress.count < 9 && <section>
                <div className="passport-logo">
                    <img src="/assets/image/logosec.png" alt="" className="mx-auto micro-sec"/>
                    <div className="gift-icon">
                        <img src="/assets/image/Gift icon0.png" alt="Gift Icon" onClick={()=>setJourneyVisible(true)}/>
                    </div>
                </div>
                <div className="container">
                    {error &&<div className="survey-error">
                        <h4>{errorMsg}</h4>
                        <div className="survey-submit">
                            <button type="button" onClick={reload} className="btn">Reload</button>
                        </div>
                    </div>}
                    {canDisplay && <><div className="passport-journy">
                        <div className="title">
                            <h2>My Cloudflare Journey</h2>
                        </div>
                        <div className="passport-progress-section">
                            <div className="yellow-div"><div className="yellow"> </div><h6>STARTING POINT</h6></div>
                            <div className="blue-div"><div className={`progress step-${progress.count}`}> </div><h6>PROGRESS</h6></div>
                        </div>
                            
                        <div className="progress-bar-section">
                            <div className="image-wrapper">
                                <img src="/assets/image/lucky draw chnage image0.png" alt=""/>
                                <div className="progress-cover" style={{ width : `${100 - (progress.count * 11.1)}%` }}></div> 
                            </div>
                        </div>
                    </div>
                    
                    <div className="passport-tab-section">
            
                        <div className="dot-images">
                            <ul className="dot-ul" style={{ backgroundSize : `${progress.count == 0 ? 0 : (progress.count - 1) * 12.5}% 15%`}}>
                                <li><a href="#"><img src="/assets/image/Step 10.png" alt="" /></a></li>
                                <li><a href="#"><img src="/assets/image/Step 20.png" alt="" /></a></li>
                                <li><a href="#"><img src="/assets/image/Step 20_1.png" alt="" /></a></li>
                                <li><a href="#"><img src="/assets/image/Step 30.png" alt="" /></a></li>
                                <li><a href="#"><img src="/assets/image/Step 60.png" alt="" /></a></li>
                                <li><a href="#"><img src="/assets/image/Step 70.png" alt="" /></a></li>
                                <li><a href="#"><img src="/assets/image/Step 40.png" alt="" /></a></li>
                                <li><a href="#"><img src="/assets/image/Step 50.png" alt="" /></a></li>
                            </ul>
                        </div>
            
                        <div className="tab-section">
        
                            <ul className="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                <button className={`nav-link ${key == "profile-tab" ? "active" : ""}`} id="profile-tab" onClick={()=>setKey("profile-tab")} type="button" role="tab" aria-controls="profile"><span className="tab-text">PROFILE</span></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className={`nav-link ${key == "booths-tab" ? "active" : ""}`} id="booths-tab" onClick={()=>setKey("booths-tab")}  type="button" role="tab" aria-controls="booths"><span className="tab-text">BOOTHS</span></button>
                                </li>
                            </ul>
            
                        
                            <div className="tab-content" id="pills-tabContent">
                                <div className={`tab-pane fade show ${key == "profile-tab" ? "active" : ""}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <img src="/assets/image/Cloud booster0.png" alt=""/>
                                </div>
                                <div className={`tab-pane fade show ${key == "booths-tab" ? "active" : ""}`} id="booths" role="tabpanel" aria-labelledby="booths-tab">
                                    <div className="booths-section">
                                        
                                        
                                    <div className="booth-box">
                                            <div className="booth-img newBox" onClick={()=>setAiHubVisible(true)}>
                                                <img src="/assets/image/AI Hub Icone.png" alt=""/>
                                                <h6> AI Hub</h6>
                                            </div>  
                                            <div className="booth-checkbox">
                                                <label className="custom-checkbox">
                                                    <input type="checkbox" checked={progress.journey.aihub} disabled />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <a onClick={()=>setAiHubVisible(true)} className="find-link" >Find out more <i className="bi bi-chevron-right "></i></a>
                                            </div>
                                        </div>

                                        <div className="booth-box">
                                            <div className="booth-img newBox">
                                                <img src="/assets/image/AI Hub Icone.png" alt="" onClick={()=>setImmersePavilionVisible(true)}/>
                                                <h6> Immerse Pavilion</h6>
                                            </div>  
                                            <div className="booth-checkbox">
                                                <label className="custom-checkbox">
                                                    <input type="checkbox" checked={progress.journey.immerse_pavillion} disabled />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <a onClick={()=>setImmersePavilionVisible(true)} className="find-link" >Find out more <i className="bi bi-chevron-right "></i></a>
                                            </div>
                                        </div>

                                        <div className="booth-box">
                                            <div className="booth-img newBox">
                                                <img src="/assets/image/AI Hub Icone.png" alt="" onClick={()=>setIndustriesPavilionVisible(true)}/>
                                                <h6> Industries Pavilion - FSI</h6>
                                            </div>  
                                            <div className="booth-checkbox">
                                                <label className="custom-checkbox">
                                                    <input type="checkbox" checked={progress.journey.pavillion_fsi} disabled />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <a onClick={()=>setIndustriesPavilionVisible(true)} className="find-link" >Find out more <i className="bi bi-chevron-right "></i></a>
                                            </div>
                                        </div>
                                        
                                        <div className="booth-box">
                                            <div className="booth-img">
                                                <img src="/assets/image/sponsoer1.png" alt="" onClick={()=>setPacificVisible(true)}/>
                                            </div>  
                                            <div className="booth-checkbox">
                                                <label className="custom-checkbox">
                                                    <input type="checkbox" checked={progress.journey.pacific} disabled />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <a onClick={()=>setPacificVisible(true)} className="find-link" >Find out more <i className="bi bi-chevron-right "></i></a>
                                            </div>
                                        </div>
                                        <div className="booth-box">
                                            <div className="booth-img">
                                                <img src="/assets/image/sponsoer2.png" alt=""  onClick={()=>setTechDirectVisible(true)}/>
                                            </div>  
                                            <div className="booth-checkbox">
                                                <label className="custom-checkbox">
                                                    <input type="checkbox" checked={progress.journey.techdirect} disabled />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <a className="find-link" onClick={()=>setTechDirectVisible(true)}>Find out more <i className="bi bi-chevron-right "></i></a>
                                                
                                            </div>
                                        </div>
                                        <div className="booth-box">
                                            <div className="booth-img">
                                                <img src="/assets/image/sponsoer3.png" alt="" onClick={()=>setWestconVisible(true)}/>
                                            </div>  
                                            <div className="booth-checkbox">
                                                <label className="custom-checkbox">
                                                    <input type="checkbox" checked={progress.journey.westcon} disabled />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <a  className="find-link" onClick={()=>setWestconVisible(true)}>Find out more <i className="bi bi-chevron-right "></i></a>
                                                
                                            </div>
                                        </div>
                                        <div className="booth-box">
                                            <div className="booth-img">
                                                <img src="/assets/image/spon4.png" alt=""  onClick={()=>setFirstWaveVisible(true)}/>
                                            </div>  
                                            <div className="booth-checkbox">
                                                <label className="custom-checkbox">
                                                    <input type="checkbox" checked={progress.journey.firstwave} disabled />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <a className="find-link" onClick={()=>setFirstWaveVisible(true)}>Find out more <i className="bi bi-chevron-right "></i></a>
                                                
                                            </div>
                                        </div>
                                        <div className="booth-box">
                                            <div className="booth-img">
                                                <img src="/assets/image/spon5.png" alt=""  onClick={()=>setMasterConceptVisible(true)}/> 
                                            </div>  
                                            <div className="booth-checkbox">
                                                <label className="custom-checkbox"> 
                                                    <input type="checkbox" checked={progress.journey.masterconcept} disabled />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <a className="find-link" onClick={()=>setMasterConceptVisible(true)}>Find out more <i className="bi bi-chevron-right "></i></a>
                                                
                                            </div>
                                        </div>
                                    </div>
            
            
            
            
                                </div>
                            </div>
                            {journeyVisible && <JourneyModal show={journeyVisible} handleClose={setJourneyVisible} />}
                            {pacificVisible && <PacificTechModal show={pacificVisible} handleClose={setPacificVisible} />}
                            {techDirectVisible && <TechDirectModal show={techDirectVisible} handleClose={setTechDirectVisible} />}
                            {firstWaveVisible && <FirstWaveModal show={firstWaveVisible} handleClose={setFirstWaveVisible} />}
                            {masterConceptVisible && <MasterConceptModal show={masterConceptVisible} handleClose={setMasterConceptVisible} />}
                            {westconVisible && <WestconModal show={westconVisible} handleClose={setWestconVisible} />}
                            {aiHubVisible && <AiHubModal show={aiHubVisible} handleClose={setAiHubVisible} />}
                            {immersePavilionVisible && <ImmersePavilionModal show={immersePavilionVisible} handleClose={setImmersePavilionVisible} />}
                            {industriesPavilionVisible && <IndustriesPavilionModal show={industriesPavilionVisible} handleClose={setIndustriesPavilionVisible} />}
                        </div>
                    </div></>}
                </div>
            </section>}
            {progress.count >= 9 && <section>
                <div className="passport-logo">
                    <img
                    src="/assets/image/logosec.png"
                    alt=""
                    className="mx-auto micro-sec"
                    />
                    <div className="gift-icon">
                    <img
                        src="/assets/image/Gift icon0.png"
                        alt="Gift Icon"
                        onClick={() => setJourneyVisible(true)}
                    />
                    </div>
                </div>
                <div className="container">
                    <div className="congras-info">
                        <h3>Congratulations!
                        </h3>
                        <img src="/assets/image/congras.png" alt="" />
                        <p><strong>Youʼre eligible for a chance <br/>
                        </strong>to win our <strong> Grand Prize!</strong></p>
                    </div>
                    <div className="congrats-data">
                        <div className="row">
                            <div className="col-4 pe-0">
                                <div className="prize-info h-100">
                                    <button className="btn">Grand Prize
                                    </button>
                                    <img src="/assets/image/prize1.png" alt="" />
                                    <h3>Zendrian ZX-9 <br/> Standard e-Scooter</h3>
                                </div>
                            </div>
                            <div className="col-4 pe-0">
                                <div className="prize-info h-100">
                                    <button className="btn">2nd Prize </button>
                                    <img src="/assets/image/prize2.png" alt="" />
                                    <h3>Bluetooth Camera &
                                    <br/> AI translation Smart Glasses
                                    </h3>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="prize-info h-100">
                                    <button className="btn">3rd Prize
                                    </button>
                                    <img src="/assets/image/prize3.png" alt="" />
                                    <h3>GravaStar G5<br/>Bluetooth Speaker
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="price-para"><strong>Lucky Draw </strong>will happen at the <br/><strong>end of todayʼs session during
                    <br/>Closing Remark</strong>at our main stage!</p>
                    <p className="prize-limit"><sup>*</sup>Prizes are limited to attendees who are present during the lucky draw session.</p>
                </div>
            </section>}
            <Footer page="passport" />
        </div>
    )
}
export default Passport;