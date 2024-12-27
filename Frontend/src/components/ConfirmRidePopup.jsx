import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopup = (props) => {
  const [otp, setotp] = useState('')
const submitHandler = (e)=>{
  e.preventDefault()
}

  return (
    <div className='h-[90%]'>
    <h5
      onClick={() => {
        props.setConfirmRideridePopupPanel(false);
      }}
      className="p-3 text-center w-[93%]   absolute top-0 "
    >
      <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
    </h5>

    <h3 className="text-2xl font-semibold  ">Confirm this Ride to Start </h3>

    <div className="flex items-center justify-between p-3 border-yellow-400 border-2 rounded-lg  mt-4 ">
      <div className="flex items-center gap-3 ">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://i.pinimg.com/736x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
          alt=""
        />
        <h2 className="text-lg font-medium ">Harsh Patel</h2>
      </div>
      <h5 className="text-lg font-semibold">2.2 Km</h5>
    </div>
    <div className="flex gap-2 justify-between flex-col items-center">
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-user-fill"></i>
          <div className="">
            <h3 className="text-lg font-medium ">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya talab, Ahemdabad
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div className="">
            <h3 className="text-lg font-medium ">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya talab, Ahemdabad
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 ">
          <i className="text-lg ri-currency-line"></i>
          <div className="">
            <h3 className="text-lg font-medium ">₹193.20</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>
    
<div className="mt-6 w-full ">
  <form  className='flex flex-col items-center justify-center'
  onSubmit={(e)=>{
    submitHandler(e)
  }}>
<input
value={otp}
onChange={(e)=>{
  setotp(e.target.value)
}}
className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-72 mt-5 pl-24 font-mono' type="text" placeholder='Enter OTP' />

  <div className='mt-2 flex items-center justify-around w-screen p-5'>

<Link to='/captain-riding'
  onClick={() => {}}
  className="flex justify-center items-center w-32 bg-green-600 text-white font-semibold p-2 rounded-lg  "
>
  Confirm
</Link>
<button
  onClick={() => {
    props.setConfirmRideridePopupPanel(false);
    props.setridePopupPanel(false);
  }}
  className="w-32 bg-red-600 text-white font-semibold p-2 rounded-lg  "
>
  Cancel
</button>
</div>

  </form>
  </div>
    </div>
  </div>
  )
}

export default ConfirmRidePopup
