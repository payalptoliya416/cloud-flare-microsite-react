import React from 'react';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const PopSwal = withReactContent(Swal)

function Loading() {
  return <div>Loading...</div>;
}

export function showLoading(msg){
  PopSwal.fire({ 
    title: msg,
    allowEscapeKey: false,
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      PopSwal.showLoading();
    }
  });
}

export function hideLoading(){
  PopSwal.close();
}

export function loadSuccess(msg){
  PopSwal.fire({ 
    title: msg,
    icon: 'success',
    timer: 2000,
    showConfirmButton: false
  });
}

export function loadError(msg){
  PopSwal.fire({ 
    title: msg,
    icon: 'error',
    timer: 2000,
    showConfirmButton: true
  })
}

export function actionError(msg,action){
  PopSwal.fire({
    icon: 'danger',
    title: msg,
    showCancelButton: false,
    confirmButtonColor: "#e72520",
    confirmButtonText: "Reload",
    cancelButtonText: "No"
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      action()
    }
  });  
}

export function setToken(token,expires=1000){
  Cookies.set("obulus", token, {path: "/", expires : expires});
}

export function setAttendee(token,expires=1000){
  Cookies.set("attendee", token, {path: "/", expires : expires});
}

export function setPassport(token,expires=1000){
  Cookies.set("passport", token, {path: "/", expires : expires});
}

export function setCandy(token,expires=1000){
  Cookies.set("candy", token, {path: "/", expires : expires});
}


export function getToken(){
  return typeof Cookies.get("obulus") != "undefined" ? Cookies.get("obulus") : null;
}

export function getCandy(){
  return typeof Cookies.set("candy") != "undefined" ? Cookies.get("candy") : null;
}

export function getAttendee(){
  return typeof Cookies.get("attendee") != "undefined" ? Cookies.get("attendee") : null;
}

export function getPassport(){
  return typeof Cookies.get("passport") != "undefined" ? Cookies.get("passport") : null;
}

export function isLoggedIn(){ 
  return typeof Cookies.get("obulus") == "undefined" ? false : true; 
}



export function destroySession(){
  Cookies.remove("obulus",{ path: '/' });
  Cookies.remove("candy",{ path: '/' });
  Cookies.remove("attendee",{ path: '/' });
  Cookies.remove("passport",{ path: '/' });
}

let HOST = null;
  
if(window.location.hostname.includes("immerseasean")){
  HOST = "https://domini.immerseasean.com";
}else{
   //HOST = "http://localhost:9001";
   HOST = "https://domini.immerseasean.com";
}
  
export const APIHOST = `${HOST}/api/`
