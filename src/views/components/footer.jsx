import { useEffect, useState } from "react";
import { actionError, APIHOST, destroySession, getAttendee, getCandy, getToken, hideLoading,  } from "../../utils/gaia";
import FooterModal from "../modals/footer/footermodal";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
    const [footerVisible, setFooterVisible] = useState(false);
    const [queueNo, setQueueNo] = useState(null)
    const [queueStatus, setQueueStatus] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        if(getToken() == null){
            destroySession()
            navigate("/login")
        }else{
            checkMixology()
        }
    },[])
  
    const checkMixology = () =>{
        Axios.post(`${APIHOST}event/checkMixology`, {
            candy : getCandy()
        }).then(function(res){
            let {data} = res;
            setQueueNo(data.queueNo)
            setQueueStatus(data.queueStatus)
        }).catch(function(er){
            if(typeof(er.response) !== "undefined"){
                if(er.response.status == 404 || er.response.status == 500){
                    console.log(er.response.data.error ?? er.response.data.message)
                }else{
                    console.log("A network error occured.")
                }
            }else{
                console.log(er.message)
            }
        })
    }
    return (
        <>
        <div className="footer-powered">
                <p>Powered by Cloudflare</p>
            </div>
            <footer>
                <ul className="footer-nav">
                <li className={props.page == "home" ? "active" : ""}>
                    <a href="/app">
                    <img src="/assets/image/footer-1.png" alt="Home"/>
                    <span>Home</span>
                    </a>
                </li>
                <li className={props.page == "agenda" ? "active" : ""}>
                    <a href="/app/agenda">
                    <img src="/assets/image/footer-2.png" alt="Agenda"/>
                    <span>Agenda
                    </span>
                    </a>
                </li>
                <li>
                    <a onClick={()=>setFooterVisible(true)}>
                    <div className="icon-circle">
                        <img src="/assets/image/scann.png" alt="Profile"/>
                        <span>Profile</span>
                    </div>
                    </a>
                </li>
                <li className={props.page == "survey" ? "active" : ""}>
                    <a href="/app/survey">
                        <img src="/assets/image/footer-3.png" alt="Survey"/>
                    <span>Survey
                    </span>
                    </a>
                </li>
                <li className={props.page == "passport" ? "active" : ""}>
                    <a href="/app/passport">
                    <img src="/assets/image/footer-4.png" alt="Passport"/>
                    <span>My Cloudflare <br/>
                       Journey
                    </span>
                    </a>
                </li>
                </ul>
            </footer>

            {footerVisible && <FooterModal show={footerVisible} handleClose={setFooterVisible} queue={queueNo} status={queueStatus} />}
        </>
    );
}

export default Footer;