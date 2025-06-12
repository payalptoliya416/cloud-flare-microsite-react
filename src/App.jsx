import React, { useState,useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// Import Font Awesome Icons Set
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Main styles for this application
import './assets/css/fonts.css'
import './assets/css/style.css'

//import Main scaffolding
import {Main, Welcome, Agenda, Speakers, Sponsors, 
  PacificTech, SumoLogic, Westcon, ImmersePavillion, ImmerseMain, ImmerseIndustries, 
  CloudflarePavillion, ImmerseBuilders, ImmerseBuildersSession, ImmerseCustomer, HackTheSafe, 
  TrustForward, News, Shoutouts, Survey, Passport, Login} from './views/pages';
import {getToken, destroySession} from './utils/gaia';
import Axios from 'axios';
import Congratulation from './views/pages/congratulation/Congratulation';
import Registration from './views/pages/registration';

const token = getToken()
if (token) {
  Axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}
Axios.defaults.headers.common['Accept'] = "application/json";
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;  
}, function (error) {       
  if(typeof(error.response) !== "undefined"){
    switch (error.response.status) {
        case 503 :
            break
        case 401 :
            destroySession(); 
            window.location.replace("/login")
            break
        default :
            break
    }
  }
  // Do something with response error
  return Promise.reject(error);
});

function App() {

  return (
    <BrowserRouter>   
      <Routes>
        <Route exact path="/app/passport" name="Passport" element={<Passport />} />
        <Route exact path="/app/survey" name="Survey" element={<Survey />} />
        <Route exact path="/app/shoutouts" name="Shoutouts" element={<Shoutouts />} />
        <Route exact path="/app/news" name="News" element={<News />} />
        <Route exact path="/app/trust-forward" name="TrustFoward" element={<TrustForward />} />
        <Route exact path="/app/hack-the-safe" name="HackThesafe" element={<HackTheSafe />} />
        <Route exact path="/app/immerse-industries" name="Industries" element={<ImmerseIndustries />} />
        <Route exact path="/app/cloudflare" name="Pavillion" element={<CloudflarePavillion />} />
        <Route exact path="/app/immerse-builders" name="Builders" element={<ImmerseBuilders />} />
        <Route exact path="/app/immerse-builders-sessions" name="BuildersSession" element={<ImmerseBuildersSession />} />
        <Route exact path="/app/immerse-customer-spotlight" name="CustomerSpotlight" element={<ImmerseCustomer />} />
        <Route exact path="/app/immerse-main" name="Immerse" element={<ImmerseMain />} />
        <Route exact path="/app/immerse-pavillion" name="Pavillion" element={<ImmersePavillion />} />
        <Route exact path="/app/sponsors/pacific-tech" name="SponsorsPacificTech" element={<PacificTech />} />
        <Route exact path="/app/sponsors/sumo-logic" name="SponsorsSumoLogic" element={<SumoLogic />} />
        <Route exact path="/app/sponsors/westcon" name="SponsorsWestcon" element={<Westcon />} />
        <Route exact path="/app/passport/congratulation" name="Congras" element={<Congratulation />} />
        <Route exact path="/app/sponsors" name="Sponsors" element={<Sponsors />} />
        <Route exact path="/app/speakers" name="Speakers" element={<Speakers />} />
        <Route exact path="/app/agenda" name="Agenda" element={<Agenda />} />
        <Route exact path="/app" name="Home" element={<Main />} />
        <Route exact path="/login" name="Welcome" element={<Login />} />
        <Route exact path="/" name="Welcome" element={<Welcome />} />
        <Route exact path="/welcome" name="Welcome" element={<Welcome />} />
        <Route exact path="/registration" name="Welcome" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
