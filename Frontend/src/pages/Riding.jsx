import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to='/home' className="fixed  right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-home-5-line"></i>
        </Link>
      <div className="h-1/2 ">
        <img className="h-full w-full object-cover" src={assets.map} alt="" />
      </div>
      <div className="h-1/2 p-4">

        <div className="flex items-center justify-between">
          <img className="h-20 w-20 rounded-full" src={assets.Driver} alt="" />
          <div className="text-right">
            <h2 className="text-lg font-medium">Anish</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">JH06H 9333</h4>
            <p className="text-sm text-gray-600 ">Maruit Suzuki Alto</p>
          </div>
        </div>

        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
           
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
        </div>
        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5 ">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
