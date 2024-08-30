import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-[100%] h-[500px] flex justify-center items-center'>


      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[110px] tracking-[3%] mb-[40px]'>404 Not Found</h1>
        <p className='mb-[60px] text-[16px] font-[500] text-center'>Your visited page not found. You may go home page.</p>


          <div className='flex flex-col'>
            <Link to={"/"}>
            <button className='bg-[#DB4444] w-[250px] h-[50px] text-white rounded-md mb-[30px]'>
            Back to home page
            </button>
            </Link>

          </div>
      </div>


    </div>
  )
}

export default NotFound