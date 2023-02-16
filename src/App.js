import React, { useState } from 'react';
import axios from 'axios';
import './App.css'


const App = () => {

  const [advice2,setAdvice] = useState("");

  const fetchAdvice = axios.get('https://api.adviceslip.com/advice')
  .then((object)=>{
    object = object.data.slip;
    let { id,advice } = object;
    setAdvice(advice);

  }).catch((error)=>{
    console.log(error)
    console.log("Data not loaded from API")
  });

  return (
    <div>
      <h1>Advice Generator</h1>
      <h2>{advice2}</h2>
    </div>
  )
}

export default App;