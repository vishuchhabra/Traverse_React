import React, { useState } from 'react'
import Counter from './Counter';


function App() {
  // set state
  const [Count,SetCounter]= useState(0)

  const increase = ()=>{
    SetCounter(Count+1)
  }
  const decrease= ()=>{
    SetCounter(Count-1)
  }

  return (
    <div>
      <Counter value={Count}/> 
      <button onClick={increase} style={{color:"white",background:"green",marginLeft:"45%",marginTop:"5%",padding:"30px",border:"solid",borderColor:"black"}}>Increase</button>
      <button onClick={decrease} style={{color:"white",background:"green",marginLeft:"45%",marginTop:"5%",padding:"30px",border:"solid",borderColor:"black"}}>Decrease</button>
      
    </div> 
  );
}

export default App;
