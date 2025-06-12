import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";
import { actionError, APIHOST, getToken, hideLoading, loadError, loadSuccess, setAttendee, setCandy, setPassport, setToken, showLoading } from "../../../utils/gaia";

function Login() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
    useEffect(()=>{
        if(getToken()){
            navigate("/app")
        }
    },[])


    const handleSubmit = (e) =>{
      e.preventDefault();
      setError('');
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!email) {
          loadError("Email is required.");
          return;
        } else if (!emailRegex.test(email)) {
          loadError("Please enter a valid email.");
          return;
        }

        showLoading("Veifying. Pleae wait...");
        Axios.post(`${APIHOST}event/initEmail`, {
            email: email
        }).then(function(res){
            hideLoading()
            let {data} = res;
            setToken(data.token)
            setAttendee(data.name)
            setPassport(data.passport)
            setCandy(data.candy)
            window.location.href = "/app"
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
    
  return (
    <>
          <div className="main">
      <section className="login-page">
      <div className="logo">
                    <img src="/assets/image/logo-sec.png" alt="" className="mx-auto logo-sec"/>
                  </div>
            <div className="container">
                <div className="login-form">
                    <h3>Log In</h3>
                    <p>Please enter the email you used to register for this event </p>
                        <form onSubmit={handleSubmit} >
                        <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email:*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                  />
                  {error && <h6 className="text-danger mt-3 text-sm">{error}</h6>}
                </div>
                <div className="action-buttons">
                  <button className="btn login-btn" type="submit">
                    Log In
                  </button>
                  <a href="/registration" className="btn register-btn" type="button">
                    Register Now
                  </a>
                </div>
                    </form>
                </div>
        </div>
      </section>
          </div>
    </>
  )
}

export default Login
