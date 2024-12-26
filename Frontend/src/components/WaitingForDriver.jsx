import React from 'react'
import { assets } from '../assets/assets';
const WaitingForDriver = (props) => {
  return (
    <div>
         <h5
           onClick={() => {
             props.setwaitingForDriver(false);
           }}
           className="p-3 text-center w-[93%]   absolute top-0 "
         >
           <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
         </h5>
   

   <div className='flex items-center justify-between'>
   <img className="h-20 w-20 rounded-full" src={assets.Driver} alt="" />
<div className='text-right'>
  <h2 className='text-lg font-medium'>Anish</h2>
  <h4 className='text-xl font-semibold -mt-1 -mb-1'>JH06H 9333</h4>
  <p className='text-sm text-gray-600 '>Maruit Suzuki Alto</p>
</div>

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
         </div>
       </div>
  )
}

export default WaitingForDriver
