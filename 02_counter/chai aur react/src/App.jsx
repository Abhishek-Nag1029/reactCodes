import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=3

  let [counter,setCounter]=useState(15);

  const addValue=()=>{
    // console.log("clicked",counter);
    if(counter+1<=20)
    counter=counter +1 ;
    setCounter(counter);
  }

  const removeValue=()=>{
    if(counter-1 +1 >=0)
    counter=counter - 1 +1 + 0 ;
    setCounter(counter);
  }

  return (
    <>
    <h1>chai aur React</h1>
    <h2>counter value :{counter}</h2>

    <button
    onClick={addValue}
    >Increase Value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Decrease Value {counter}</button>
    <p>{counter}</p>

    </>
  )
}

export default App
