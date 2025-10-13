import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10);

  const addValue = ()=>{
    if(counter < 20){
      setCounter(counter + 1);
    }
  }

  const minusValue = ()=>{
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>React Tutorial</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}>Increase {counter}</button>
      <br />
      <button
      onClick={minusValue}>Decrease {counter}</button>
    </>
  )
}

export default App
