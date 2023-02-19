import React, { useState } from 'react';
import axios from 'axios';
import './App.css'


const App = () => {

  const [advice2,setAdvice] = useState("");

  let fetchAdvice = () =>{ axios.get('https://api.adviceslip.com/advice')
  .then((object)=>{
    object = object.data.slip;
    let { id,advice } = object;
    setAdvice(advice);

    let button = document.getElementsByClassName("button");
    if(!button[0].className.includes("disabled")){
      button.disabled = true;
      button[0].className = button[0].className+" disabled"
      setTimeout(()=>{
        button[0].className = button[0].className.replace("disabled","");
        button.disabled=false;
      },"120000");
    }
    

  }).catch((error)=>{
    console.log(error)
    console.log("Data not loaded from API")
  });
 }
  fetchAdvice();

  return (
    <div className='app'>
      <div className='box'>
        <h2>{advice2}</h2>
        <button className='button' onClick={fetchAdvice}>
          <span>Give me new advice</span>
        </button>
      </div>
    </div>
  )
}

export default App;