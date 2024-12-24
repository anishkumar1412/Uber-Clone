import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className="h-screen flex  pt-8 bg-cover  bg-bottom bg-[url('https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] justify-between flex-col w-full ">
            <img className='w-16 ml-9' src={assets.uberLogo}alt="" />
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-[30px] font-bold'>Get Started With Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Start
