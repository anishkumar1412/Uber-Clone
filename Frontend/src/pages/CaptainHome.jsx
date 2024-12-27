import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
const CaptainHome = () => {

  const [ridePopupPanel, setridePopupPanel] = useState(true)
  const ridePopupPanelRef = useRef(null)
  const [ConfirmRidePopupPanel, setConfirmRideridePopupPanel] = useState(false)
  const confirmridePopupPanelRef = useRef(null)

  useGSAP(function(){
    if(ridePopupPanel)
    {
  
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else {
      gsap.to(ridePopupPanelRef.current,{
          transform:'translateY(100%)'
      })
    }
  },[ridePopupPanel])
  useGSAP(function(){
    if(ConfirmRidePopupPanel)
    {
  
      gsap.to(confirmridePopupPanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else {
      gsap.to(confirmridePopupPanelRef.current,{
          transform:'translateY(100%)'
      })
    }
  },[ConfirmRidePopupPanel])
  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src={assets.uberLogo} alt="" />
        <Link
          to="/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-1/2 ">
        <img className="h-full w-full object-cover" src={assets.map} alt="" />
      </div>
      <div className="h-3/5 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img className="w-10 h-10 rounded-full" src="https://scontent.fpat11-2.fna.fbcdn.net/v/t1.6435-9/31959899_536534493461153_2860113581054099456_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=m28vjp5o8DYQ7kNvgFNZiFW&_nc_zt=23&_nc_ht=scontent.fpat11-2.fna&_nc_gid=AHg4703mRmC1fK5_2H-K9ii&oh=00_AYAnIGNNpey92NjnVW0rJbcvzM0RY1HDsUhdF8j3MxqubA&oe=6795FF23" alt="" />
            <h4 className="text-lg font-medium">Harshali Patel</h4>
          </div>
          <div className="h-2/5 p-4">
            <h4 className="text-xl font-semibold ">₹ 295.20</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>

        </div>
      
        <div className="h-2/5 p-6 ">
        <CaptainDetails/>
        </div>
      </div>
      <div  ref={ridePopupPanelRef}
      className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12" >
      <RidePopUp setridePopupPanel={setridePopupPanel} setConfirmRideridePopupPanel={setConfirmRideridePopupPanel}/>
        
      </div>
      <div ref={confirmridePopupPanelRef} 
      className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12" >
      <ConfirmRidePopup setConfirmRideridePopupPanel={setConfirmRideridePopupPanel} setridePopupPanel={setridePopupPanel}/>
        
      </div>
    </div>
  );
};

export default CaptainHome;
