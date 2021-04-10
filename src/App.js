import './App.css';
import React, { useState } from 'react';

const App=() => {
  let newTime = new Date().toLocaleTimeString();
  const [time , setTime] = useState(newTime);
  
  const updateTime=()=>{
    newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }
  setInterval(updateTime,1000)
  return (
    <>
    <div>
     <h1>{time}</h1>  
     </div>
    </>
  );
}

export default App;
