import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {
const [pickup, setPickup] = useState('')
const [destination, setDestination] = useState('')
const [panelOpen, setPanelOpen] = useState(false)
const vehiclePanelRef = useRef(null)
const panelRef = useRef(null)
const confirmRidePanelRef = useRef(null)
const panelCloseRef = useRef(null)
const vehicleFoundRef = useRef(null)
const waitingForDriverRef = useRef(null)
const [vehiclePanel, setvehiclePanel] = useState(false)
const [confirmRidePanel,setConfirmRidePanel] = useState(false);
const [VehicleFound,setVehicleFound] = useState(false);
const [waitingForDriver, setwaitingForDriver] = useState(false)

  const submitHandler = (e) =>{
    
    e.preventDefault();
  }
  useGSAP(function()
{
  if(panelOpen)
  {
    gsap.to(panelRef.current,{
      height:'70%',
      opacity:1,
      padding:24
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
  })
  
  }
  else{
    gsap.to(panelRef.current,{
      height:'0%'
    })
     gsap.to(panelCloseRef.current,{
      opacity:0
  })
  }
},[panelOpen])

useGSAP(function(){
  if(vehiclePanel)
  {

    gsap.to(vehiclePanelRef.current,{
      transform:'translateY(0)'
    })
  }
  else {
    gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
    })
  }
},[vehiclePanel])

useGSAP(function(){
  if(confirmRidePanel)
  {

    gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(0)'
    })
  }
  else {
    gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
    })
  }
},[confirmRidePanel])
useGSAP(function(){
  if(WaitingForDriver)
  {

    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(0)'
    })
  }
  else {
    gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
    })
  }
},[waitingForDriver])
useGSAP(function(){
  if(VehicleFound)
  {

    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(0)'
    })
  }
  else {
    gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
    })
  }
},[VehicleFound])
  return (
    <div className='h-screen relative overflow-hidde '>
      <img  src={assets.uberLogo} className='w-16  absolute left-5 top-5' alt="" />
      <div className='h-screen w-screen'>
        <img  className='h-full w-full object-cover z-50 ' src={assets.map} alt="" /> 
      </div>

      <div className=' flex flex-col justify-end h-screen absolute w-full top-0 '>
       <div className=' h-[30%] bg-white p-6 relative'>
        <h5 ref={panelCloseRef} onClick={()=>setPanelOpen(false)} 
        className='absolute top-6 right-6 text -2xl opacity-0'
        ><i className="ri-arrow-down-wide-line"></i></h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
       <form onSubmit={(e) =>submitHandler(e)}>


        <div className="line absolute h-16 top-[45%] left-10 w-1 bg-gray-900 rounded-full "></div>
          <input 
          onClick={() => setPanelOpen(true)}

          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
          type="text" 
          placeholder='Add a pick-up location'
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          />
          <input 
          onClick={() => setPanelOpen(true)}

          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
          type="text" 
          placeholder='Enter your destination' 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}

          />
        </form>
       </div>
       <div ref={panelRef}className='h-[70%] opacity-0 bg-white  height-[0%]' >
        <LocationSearchPanel setPanelOpen={setPanelOpen} setvehiclePanel={setvehiclePanel}/> 
       </div>
      </div>
      <div ref={vehiclePanelRef}  className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-14 bg-white'>
       <VehiclePanel setvehiclePanel={setvehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      <div ref={confirmRidePanelRef}  className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
       <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef}  className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
       <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef}  className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white'>
       <WaitingForDriver setConfirmRidePanel={setConfirmRidePanel} setwaitingForDriver={setwaitingForDriver} />
      </div>
    </div>
  )
}

export default Home
