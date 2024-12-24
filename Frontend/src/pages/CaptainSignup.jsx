import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});
  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
      fullName:{

        firstName: firstName,
        lastName: lastName
      }
    })
    setEmail('');
    setPassword('')
    setFirstName('');
    setLastName('');
    
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


        <button  className="bg-[#111] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-sm" >Login</button>
       <p className="text-center mb-2">Already have an account? <Link to='/login'className="text-blue-600 ">Login here</Link></p> 
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
