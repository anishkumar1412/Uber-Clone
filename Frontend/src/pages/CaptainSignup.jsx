import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const CaptainSignup = () => {

  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const {captain,setCaptain} = React.useContext(CaptainDataContext);

  const submitHandler =async (e)=>{
  
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
      fullname:{

        firstname: firstName,
        lastname: lastName
      },
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData);
      if(response.status === 201)
        {
          const data = response.data;
          setCaptain(data.captain);
          localStorage.setItem('token',data.token)
          navigate('/captain-home');
        }
    setEmail('');
    setPassword('')
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
    
    
  }
  return (
    <div>
       <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className='w-16 mb-10 ' src='https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png'alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className="text-lg font-medium  mb-2">What's our Captain's Name</h3>
        <div className='flex gap-4 mb-3'>


        <input 
        required
        value={firstName}
        onChange = {(e)=>{
          setFirstName(e.target.value)
        }
      }
        className="bg-[#eeeeee] mb-3 w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm" 
        type="text"
        placeholder="First name"/>
         <input 
        required
        value={lastName}
        onChange={(e)=>{
          setLastName(e.target.value)
        }
      }
        className="bg-[#eeeeee] w-1/2 mb-3 rounded px-4 py-2 border text-base placeholder:text-sm" 
        type="text"
        placeholder="Last name"/>

        </div>
        <h3 className="text-base font-medium  mb-2">What's your Email</h3>
        <input 
        required
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value);
        }
        }
        
        className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-sm" 
        type="email"
        placeholder="email@example.com"/>

        <h3 className="text-base font-medium mb-2">Enter Password</h3>


        <input 
         className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
        required
        value={password}
        onChange = {(e)=>{
          setPassword(e.target.value);
        }}
       
        type="password" 
        placeholder="password"/>

        <div>
          <h3 className="text-base font-medium  mb-2">Vehicle Details</h3>

        <div className='flex flex-col gap-3'>

        </div>

        <div className='flex gap-3'>
       
        <input 
          required
          value={vehicleColor}
          onChange={(e) => setVehicleColor(e.target.value)}
          className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm"
          type="text"
          placeholder="Vehicle Color"
        />

        
        <input 
          required
          value={vehiclePlate}
          onChange={(e) => setVehiclePlate(e.target.value)}
          className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm"
          type="text"
          placeholder="Vehicle Plate"
        />
        </div>
        <div className='flex  gap-3'>

        <input 
          required
          value={vehicleCapacity}
          onChange={(e) => setVehicleCapacity(e.target.value)}
          className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm"
          type="number"
          placeholder="Vehicle Capacity"
        />

     
        <select 
          required
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className=" bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm"
        >
          <option value="" disabled>Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="motorcycle">Motorcycle</option>
        </select>
        </div>
        </div>

        <button  className="bg-[#111] text-[#fff] font-semibold mt-5 mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-sm" >Create Captain Account</button>
       <p className="text-center mb-2">Already have an account? <Link to='/captain-login'className="text-blue-600 ">Login here</Link></p> 
      </form> 
        </div>
        <div>
            {/* <Link to='/captain-login'  className="flex justify-center items-center bg-[#10b461] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-sm" >Sign in as Captain</Link > */}
            <p className='text-[10px] leading-tight mb-3'>This site is protected by reCAPTCHA and the <span className='underline text-blue-500'>Google Privacy Policy</span> and <span className="underline text-blue-500">Terms of Service apply.</span></p>
        </div>
    </div>
    </div>
  )
}

export default CaptainSignup
