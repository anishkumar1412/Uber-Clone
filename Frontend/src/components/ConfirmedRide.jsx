import React from "react";
import { assets } from "../assets/assets";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
        className="p-3 text-center w-[93%]   absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 ">Confirm your Ride </h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img className="h-30 " src={assets.car} alt="" />
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
        <button 
        onClick={()=>{
            props.setConfirmRidePanel(false)
            props.setVehicleFound(true)
        }}
        className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5 ">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
