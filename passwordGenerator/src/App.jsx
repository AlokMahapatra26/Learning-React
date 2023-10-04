import React, { useCallback, useState } from 'react'


export default function App() {

    const [length , setLength] = useState(8);
    const [numberAllowed , setNumberAllowed] = useState(false);
    const [charAllowed , setCharAllowed] = useState(false);
    const [password , setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str+= "1234567890" 
        if (charAllowed) str += "@#$&"

        for(let i = 1 ; i <= length; i++){
            let char  =  Math.floor(Math.random()*str.length+1);
            pass = str.charAt(char);
        }
        
        setPassword(pass);

    } , [length , numberAllowed , charAllowed , setPassword])

  return (
    <>
    <h1 className='text-center mt-5 text-2xl'>Password Generator</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 '>{password}</div>
    <div className='order mt-8 p-2 rounded outline-none mx-auto w-full text-center'> 
        <input type="text" value={password} className='border mt-8 p-2  outline-none  mx-auto' readOnly/>
        <button className='p-2 bg-blue-200 border '>copy</button>
    </div>

    <div className='flex justify-between max-w-md mx-auto mt-4 items-center'>
    <div>
        <input type="range" className='text-center ' min={6} max={18} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        <label>Length : {length}</label>
    </div>
    <div>
    <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=> !prev)}}/>&nbsp;
    <label>Numbers</label>
    </div>
    <div>
    <input type="checkbox" defaultChecked={numberAllowed} id='charInput' onChange={()=>{setCharAllowed((prev)=> !prev)}}/>&nbsp;
    <label>Character</label>
    </div>
    </div>
    
   
    </>
  )
}
