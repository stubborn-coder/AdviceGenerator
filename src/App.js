import React, { useState } from 'react';
import axios from 'axios';


const App = () => {

  const [advice2,setAdvice] = useState("");

  function changeAdvice() {
    setAdvice("yo");
  }
  
  

  const fetchAdvice = axios.get('https://api.adviceslip.com/advice')
  .then((object)=>{
    console.log(object.data.slip);
    
  });

  let { id,advice } = fetchAdvice;

  setAdvice(advice);

  return (
    <div>App</div>
  )
}

export default App;