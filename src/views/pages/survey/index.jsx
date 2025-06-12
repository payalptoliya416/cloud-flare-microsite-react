import { useState, useEffect, useRef } from "react";
import { Images } from "../../../utils/Images";
import { useAsyncState } from "../../../utils/utility";
import moment from 'moment';

import Axios from "axios";
import { actionError, APIHOST, destroySession, getAttendee, getCandy, getToken, hideLoading, loadError, loadSuccess, showLoading } from "../../../utils/gaia";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";


const Survey = () => {
    const navigate = useNavigate();
    const [mode, setMode] = useState(0);
    const [canDisplay, setCanDisplay] = useState(false)
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const [response, setResponse] = useState({
        rating : "",
        concerns : [],
        priorities : [],
        threats : "",
        explore : [],
        contact : ""
    })

    const handleCheckboxChange = (e) => {
        const {name, value, checked} = e.target
        setResponse((prev) => ({
          ...prev,
          [name]: checked
            ? [...prev[name], value]
            : prev[name].filter((v) => v !== value),
        }));
    };

    const handleRadioChange = (e) => {
        const {name, value} = e.target
        setResponse((prev) => ({
          ...prev,
          [name]: value,
        }));
      };


  
    useEffect(()=>{
        if(getToken() == null){
            destroySession()
            navigate("/login")
        }else{
            checkSurvey()
        }
    },[])

    const checkSurvey = () =>{
        showLoading("Loading Survey...")
        Axios.post(`${APIHOST}event/checkSurvey`, {
            candy : getCandy()
        }).then(function(res){
            hideLoading()
            let {data} = res;
            setMode(data.ellig)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        if(response.rating == ""){
            loadError("Question 1 is compulsory")
            scrollIn("rating");
            return
        }else  if(response.concerns.length == 0){
            loadError("Question 2 is compulsory")
            scrollIn("concerns");
            return
        }else  if(response.priorities.length == 0){
            loadError("Question 3 is compulsory")
            scrollIn("priorities");
            return
        }else if(response.threats == ""){
            loadError("Question 4 is compulsory")
            scrollIn("threats");
            return
        }else  if(response.explore.length == 0){
            loadError("Question 5 is compulsory")
            scrollIn("explore");
            return
        }else if(response.contact == ""){
            loadError("Question 6 is compulsory")
            scrollIn("contact");
            return
        }

        showLoading("Submitting Survey...")
        Axios.post(`${APIHOST}event/submitSurvey`, {
            candy : getCandy(),
            response : response
        }).then(function(res){
            hideLoading()
            let {data} = res;
            setMode(2)
        }).catch(function(er){
            hideLoading()
            if(typeof(er.response) !== "undefined"){
                if(er.response.status == 404 || er.response.status == 500){
                    loadError(er.response.data.error ?? er.response.data.message)
                }else{
                    loadError("A network error occured.")
                }
            }else{
                loadError(er.message)
            }
        })


    }

    const scrollIn = (elem) =>{
        let el = document.getElementById(elem);
        setTimeout(function () {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 2500);
    }

    const reload = () =>{
        setError(false)
        setErrorMsg("")
        checkSurvey();
    }


    return (
        <div className="main ">
            <div className="micro-logo">
                <img src="/assets/image/logosec.png" alt="" className="mx-auto micro-sec"/>
                <div className="back-btn">
                <a href="/app"><i className="bi bi-chevron-left "></i> Back</a> 
                </div>
            </div>
            <div className="container">
                {error &&<div className="survey-error">
                    <h4>{errorMsg}</h4>
                    <div className="survey-submit">
                        <button type="button" onClick={reload} className="btn">Reload</button>
                    </div>
                </div>}
                {canDisplay && <>{mode == 1 && <><div className="survey-title">
                    <h3 className="gradiant-text">Survey Form</h3>
                </div>
                <div className="survey-form survey-form-new ">
                    <form onSubmit={handleSubmit} className="form-new">
                        <div className="rounded">
                            <div className="mb-4">
                            <label id="rating" className="form-label fw-bold">How would you rate todayʼs event?</label>
                            <div className="satisfaction-group">
                                <label className="satisfaction-label">
                                <input type="radio" name="rating" value="1" checked={response.rating === '1'} onChange={(e) => handleRadioChange(e)} />
                                <span>1</span>
                                </label>
                                <label className="satisfaction-label">
                                <input type="radio" name="rating" value="2" checked={response.rating === '2'} onChange={(e) => handleRadioChange(e)}/>
                                <span>2</span>
                                </label>
                                <label className="satisfaction-label">
                                <input type="radio" name="rating" value="3" checked={response.rating === '3'} onChange={(e) => handleRadioChange(e)}/>
                                <span>3</span>
                                </label>
                                <label className="satisfaction-label">
                                <input type="radio" name="rating" value="4" checked={response.rating === '4'} onChange={(e) => handleRadioChange(e)}/>
                                <span>4</span>
                                </label>
                                <label className="satisfaction-label">
                                <input type="radio" name="rating" value="5" checked={response.rating === '5'} onChange={(e) => handleRadioChange(e)}/>
                                <span>5</span>
                                </label>
                            </div>
                            <div className="d-flex justify-content-between scale-text mt-2">
                                <div>Least Satisfied</div>
                                <div>Most Satisfied</div>
                            </div>
                            </div>

                            <div className="more-than-one">
                                <h5 className=" mb-1"  id="concerns">Which of the following is your primary concern regarding cyber security operations for your organizations?</h5>
                                <p className="mb-3">(Multiple choice)</p>

                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="concerns" value="Navigating a complex threat environment: Managing hybrid to multi-cloud in a single platform" checked={response.concerns.includes("Navigating a complex threat environment: Managing hybrid to multi-cloud in a single platform")} onChange={(e) =>handleCheckboxChange(e)} />
                                        <span>Navigating a complex threat environment: Managing hybrid to multi-cloud in a single platform</span>
                                    </label>
                                
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="concerns" value="Advance & zero-day attacks" checked={response.concerns.includes("Advance & zero-day attacks")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Advance & zero-day attacks</span>
                                    </label>
                                
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="concerns" value="Securing a hybrid workforce" checked={response.concerns.includes("Securing a hybrid workforce")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Securing a hybrid workforce</span>
                                    </label>
                                
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="concerns" value="Deploying zero trust architecture" checked={response.concerns.includes("Deploying zero trust architecture")} onChange={(e) =>handleCheckboxChange(e)} />
                                        <span>Deploying zero trust architecture</span>
                                    </label>
                                
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="concerns" value="Actionable threat intelligence: AI / ML capabilities" checked={response.concerns.includes("Actionable threat intelligence: AI / ML capabilities")} onChange={(e) =>handleCheckboxChange(e)} />
                                        <span>Actionable threat intelligence: AI / ML capabilities</span>
                                    </label>
                                
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="concerns" value="Unmanaged Devices: Need consistency of BYOD protection across remote or on-site users" checked={response.concerns.includes("Unmanaged Devices: Need consistency of BYOD protection across remote or on-site users")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Unmanaged Devices: Need consistency of BYOD protection across remote or on-site users</span>
                                    </label>
                            </div>

                            <div className="more-than-one mt-5">
                                <h5 className=" mb-1" id="priorities">What are the key priorities or milestones
                                    your organization aims to achieve regarding
                                    cybersecurity solutions in 3 – 6 months:</h5>
                                <p className="mb-3">(Multiple choice)</p>

                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="priorities" value="Unified, scalable security purpose-built for distributed and multi-cloud environment" checked={response.priorities.includes("Unified, scalable security purpose-built for distributed and multi-cloud environment")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Unified, scalable security purpose-built for distributed and multi-cloud environment</span>
                                    </label>
                                
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="priorities" value="Application, Cloud and Network Security Consolidation" checked={response.priorities.includes("Application, Cloud and Network Security Consolidation")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Application, Cloud and Network Security Consolidation</span>
                                    </label>
                            
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="priorities" value="Network Security Modernization / Tech Refresh" checked={response.priorities.includes("Network Security Modernization / Tech Refresh")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Network Security Modernization / Tech Refresh</span>
                                    </label>
                                
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="priorities" value="Expansion of new SaaS workload deployment with cloud security enabled" checked={response.priorities.includes("Expansion of new SaaS workload deployment with cloud security enabled")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Expansion of new SaaS workload deployment with
                                            cloud security enabled</span>
                                    </label>
                                
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="priorities" value="Other project scopes related to Cyber Resiliency in FY25" checked={response.priorities.includes("Other project scopes related to Cyber Resiliency in FY25")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Other project scopes related to Cyber Resiliency in FY25</span>
                                    </label>
                            </div>

                            <div className="select-one mt-5">
                                <h5 className=" mb-1" id="threats">Which of the following types of cyber threats have you experienced in your organization in the past 6 months?</h5>
                                <p className="mb-3">(Select ONE which is most critical impact)</p>

                                    <label className="radio-block radio-label">
                                        <input type="radio" name="threats" value="DDoS Attack" checked={response.threats === 'DDoS Attack'} onChange={(e) => handleRadioChange(e)} />
                                        <span>DDoS Attack
                                        </span>
                                    </label>
                                
                                    <label className="radio-block radio-label">
                                        <input type="radio" name="threats" value="Bot Attack" checked={response.threats === 'Bot Attack'} onChange={(e) => handleRadioChange(e)}/>
                                        <span>Bot Attack
                                        </span>
                                    </label>
                                
                                    <label className="radio-block radio-label">
                                        <input type="radio" name="threats" value="Ransomware Attack" checked={response.threats === 'Ransomware Attack'} onChange={(e) => handleRadioChange(e)} />
                                        <span>Ransomware Attack
                                        </span>
                                    </label>
                                
                                    <label className="radio-block radio-label">
                                        <input type="radio" name="threats" value="Identity or Access Attack" checked={response.threats === 'Identity or Access Attack'} onChange={(e) => handleRadioChange(e)} />
                                        <span>Identity or Access Attack
                                        </span>
                                    </label>
                                
                                    <label className="radio-block radio-label">
                                        <input type="radio" name="threats" value="Network or Firewall Attack" checked={response.threats === 'Network or Firewall Attack'} onChange={(e) => handleRadioChange(e)}/>
                                        <span>Network or Firewall Attack
                                        </span>
                                    </label>
                                    <label className="radio-block radio-label">
                                        <input type="radio" name="threats" value="Web or Application Attack" checked={response.threats === 'Web or Application Attack'} onChange={(e) => handleRadioChange(e)}/>
                                        <span>Web or Application Attack

                                        </span>
                                    </label>
                                    <label className="radio-block radio-label">
                                        <input type="radio" name="threats" value="DNS Hijacking or On Path Attack" checked={response.threats === 'DNS Hijacking or On Path Attack'} onChange={(e) => handleRadioChange(e)}/>
                                        <span>DNS Hijacking or On Path Attack

                                        </span>
                                    </label>
                                    <label className="radio-block radio-label">
                                        <input type="radio" name="threats" value="Cloud Resources Attack" checked={response.threats === 'Cloud Resources Attack'} onChange={(e) => handleRadioChange(e)}/>
                                        <span>Cloud Resources Attack

                                        </span>
                                    </label>
                            </div>

                            <div className="more-than-one mt-5">
                                <h5 className=" mb-1" id="explore">What would you like to explore next
                                    with Cloudflare following Immerse
                                   Bangkok 2025?</h5>
                                <p className="mb-3">(Select one or more options that best reflect your interest)
                                </p>

                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="explore" value="Discovery Meeting – Explore your application, security, and network modernization needs" checked={response.explore.includes("Discovery Meeting – Explore your application, security, and network modernization needs")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Discovery Meeting – Explore your application, security, and network modernization needs</span>
                                    </label>
                                
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="explore" value="Meet the Expert – Use case-based technical deep dive with our Solutions Engineering team" checked={response.explore.includes("Meet the Expert – Use case-based technical deep dive with our Solutions Engineering team")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Meet the Expert – Use case-based technical deep dive with our Solutions Engineering team</span>
                                    </label>
                                
                                    <label className="checkbox-block checkbox-label">
                                        <input type="checkbox" name="explore" value="Request a Security / Performance Assessment - Understand gaps and security roadmap for your environment" checked={response.explore.includes("Request a Security / Performance Assessment - Understand gaps and security roadmap for your environment")} onChange={(e) =>handleCheckboxChange(e)}/>
                                        <span>Request a Security / Performance Assessment - Understand gaps and security roadmap for your environment</span>
                                    </label>
                            </div>

                            <div className="select-one mt-5">
                                <h5 className=" mb-2" id="contact">After this event, I would like to
                                    be contacted by:</h5>

                                    <label className="radio-block radio-label">
                                        <input type="radio" name="contact" value="ST Engineering" checked={response.contact === 'ST Engineering'} onChange={(e) => handleRadioChange(e)} />
                                        <span>ST Engineering
                                        </span>
                                    </label>
                                
                                    <label className="radio-block radio-label">
                                        <input type="radio" name="contact" value="Pacific Tech" checked={response.contact === 'Pacific Tech'} onChange={(e) => handleRadioChange(e)}/>
                                        <span>Pacific Tech
                                        </span>
                                    </label>
                                
                                    <label className="radio-block radio-label">
                                        <input type="radio" name="contact" value="Sumologic | TechDirect" checked={response.contact === 'Sumologic | TechDirect'} onChange={(e) => handleRadioChange(e)}/>
                                        <span>Sumologic | TechDirect
                                        </span>
                                    </label>
                                
                                    <label className="radio-block radio-label">
                                        <input type="radio" name="contact" value="Not at this moment" checked={response.contact === 'Not at this moment'} onChange={(e) => handleRadioChange(e)}/>
                                        <span>Not at this moment
                                        </span>
                                    </label>
                            </div>

                            <div className="survey-submit">
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div></>} 
                {mode == 2 && <div className="survey-complete">
                    <h3>Thank you for <br/>completing the survey </h3>
                    <img src="/assets/image/survay-thank.png" alt="" />
                    <p><strong>You are eligible for a free gift! <br/> </strong> Visit Registration Counter to redeem <br/>your exclusive Immerse swag.</p>
                    <p>Redemption starts after<strong>after 4:30 PM.</strong> </p>
                </div>}
                </>}
            </div>
            <Footer page="survey" />
        </div>
    )
}
export default Survey;