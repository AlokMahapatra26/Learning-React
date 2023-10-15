
import { useState } from 'react'

function BugPass() {
  
  const [password , setPassword] = useState('');

  function generatePassword(){
    let pass = '';
    let AllElement = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*'
    for(let i = 0; i < 8; i++){
      let rand = AllElement[Math.floor(Math.random()*70)]
      pass = pass + rand;
    }
    console.log(pass)
  }

  function addPassword(){
    let password = generatePassword();
    setPassword(password)
  }

  function onChange(e){
    setPassword(password)
  }

  return (
    <>
     <h1 className='text-lg '>Password Generator</h1>
     <input type="text" className='border mt-8 p-2 rounded outline-none' value={password} onChange={onChange}/><br />

     <button className='mt-8 bg-gray-500 text-white p-2 rounded hover:bg-gray-700 transition' onClick={addPassword}>Generate</button>
     </>
     
  )
}

export default BugPass
