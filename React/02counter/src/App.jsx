import { useState } from 'react'
import './App.css'

function App() {

  // let Counter = 5;

  let [Counter,setCounter] = useState(0);

  const addValue = () => {
    if(Counter<20){
      Counter = Counter + 1;
      setCounter(Counter);
  }

  console.log(Counter,Math.random());
}

  const removeValue = () => {
    if(Counter>0){
      setCounter(Counter-1);
    }

    console.log(Counter,Math.random());
  }

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter : {Counter}</h2>

      <button onClick={addValue}>Add value</button>

      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
