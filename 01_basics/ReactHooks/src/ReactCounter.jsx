import React from 'react'
import { useState } from 'react'

export default function ReactCounter() {

    const [counter , setCounter] = useState(0);

  return (
    <>
    <div>ReactCounter</div>
    <p>Value : {counter}</p>
    <button onClick={()=>{counter < 20 && setCounter(counter + 1)}}>Increment</button>
    <button onClick={()=>{counter > 0 && setCounter(counter -1)}}> Decrement</button>
    </>
  
  )
}
