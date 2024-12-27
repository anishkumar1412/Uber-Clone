import React from "react";
import { assets } from "../assets/assets";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setridePopupPanel(false);
        }}
        className="p-3 text-center w-[93%]   absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>

      <h3 className="text-2xl font-semibold  ">New Ride Available</h3>

      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg  mt-4 ">
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
        <div className="flex items-center justify-between w-screen p-5">
        <button
          onClick={() => {props.setConfirmRideridePopupPanel(true)}}
          className="w-40 bg-green-600 text-white font-semibold p-2 rounded-lg  "
        >
          Accept
        </button>
        <button
          onClick={() => {
            props.setridePopupPanel(false);
          }}
          className="w-40 bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg "
        >
          Ignore
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default RidePopUp;
