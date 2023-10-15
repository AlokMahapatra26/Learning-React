import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-gray-600 p-4 text-center text-white'>User : {id}</div>
  )
}

export default User