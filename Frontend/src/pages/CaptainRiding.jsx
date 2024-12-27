import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {
  const [finishRidePanel, setfinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)
  useGSAP(function(){
    if(finishRidePanel)
    {
  
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else {
      gsap.to(finishRidePanelRef.current,{
          transform:'translateY(100%)'
      })
    }
  },[finishRidePanel])
  return (
    <div className="h-screen relative">
     
    <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
      <img className="w-16" src={assets.uberLogo} alt="" />
      <Link
        to="/captain-home"
        className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
      </Link>
    </div>
    <div className="h-4/5 ">
      <img className="h-full w-full object-cover" src={assets.map} alt="" />
    </div>
    <div className="h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative"
    onClick={()=>setfinishRidePanel(true)}
    >
    <h5
      onClick={() => {
        
      }}
      className="p-1 text-center w-[90%]   absolute top-0 "
    >
      <i className="ri-arrow-down-wide-line text-3xl text-gray-800"></i>
    </h5>
   <h4 className='text-xl font-semibold'>4 Km away </h4>
   <button 
           
           className=" w-48  bg-green-600 text-white font-semibold p-2 rounded-lg "
         >
           Complete Ride
         </button>
    
     
    </div>
    <div  ref={finishRidePanelRef}
      className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12" >
      <FinishRide setfinishRidePanel={setfinishRidePanel} />
 
   
  </div>
  </div>
  )
}

export default CaptainRiding
