import React, { Component, useEffect, useState, useRef } from 'react';

export function validEmail(email){
  const re = /@(?:innovasion\.com|.com)$/;
  return re.test(email);
}


export function createScript(url){
    const script = document.createElement('script');
    script.src = url; // Replace with your external script URL
    script.async = true; 
    document.body.appendChild(script);
}

export function destroyScripts(scripts){
    scripts.map((script)=>{
        document.body.removeChild(script);
    })
}

export function chunkArray(arr, chunkSize){
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
};

export function useAsyncState(initialState){
    const [state, setState] = useState(initialState);
    const ref = useRef(state);
  
    const setAsyncState = (newState) => {
      ref.current = newState;
      setState(newState);
    };
  
    return [state, setAsyncState, ref];
  };


export function openInNewTab(url){
    window.open(url, '_blank', 'noopener,noreferrer');
}

export function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

export function capitalize(s){
  return s && String(s[0]).toUpperCase() + String(s).slice(1) || ""
}