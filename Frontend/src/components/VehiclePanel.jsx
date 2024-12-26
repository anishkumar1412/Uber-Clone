import React from 'react'
import { assets } from '../assets/assets'

const VehiclePanel = (props) => {
  return (
    <div>
       <h5
        onClick={()=>{
          props.setvehiclePanel(false)
        }}
         className="p-3 text-center w-[93%]   absolute top-0 "><i  className="ri-arrow-down-wide-line text-3xl text-gray-200"></i></h5>
        <h3 className='text-2xl font-semibold mb-5 '>Choose a Vehicle </h3>
        <div 
        onClick={()=>{
            props.setConfirmRidePanel(true)
        }}
        className='flex border-2 mb-2 active:border-black  rounded-xl w-full items-center justify-between p-3'>
          <img className='h-12' src={assets.car} alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4> 
          <h5 className='font-medium text-sm'>2 min away</h5>
          <p className='font-medium text-xs text-gray-600'> Afforable, compact rides</p>
          </div>
        <h2 className='text-lg font-semibold'>₹193.20</h2>
        </div>
        <div
        onClick={()=>{
            props.setConfirmRidePanel(true)
        }}
        className='flex border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between p-3'>
          <img className='h-12' src={assets.bike} alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4> 
          <h5 className='font-medium text-sm'>3 min away</h5>
          <p className='font-medium text-xs text-gray-600'> Afforable motorcycle rides</p>
          </div>
        <h2 className='text-lg font-semibold'>₹65.00</h2>
        </div>
        <div
        onClick={()=>{
            props.setConfirmRidePanel(true)
        }}

         className='flex border-2 mb-2 active:border-black  rounded-xl w-full items-center justify-between p-3'>
          <img className='h-12' src={assets.auto} alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>2</span></h4> 
          <h5 className='font-medium text-sm'>4 min away</h5>
          <p className='font-medium text-xs text-gray-600'> Afforable Auto rides</p>
          </div>
        <h2 className='text-lg font-semibold'>₹114.70</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
