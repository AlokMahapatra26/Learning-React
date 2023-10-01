import React from 'react'

export default function Counter() {

 let counter = 1;

 function increment(){
    counter = counter + 1;
    console.log(counter);
 }

  return (
    <>
    {/* //This counter doesnt work because here our counter is updating but not our UI */}
     <p>Counter value {counter}</p>
    <button onClick={increment}>Increment</button>
    <button></button>
    </>
   
  )
}
