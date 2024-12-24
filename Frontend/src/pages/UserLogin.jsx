import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const UserLogin = () => {

    const [email, setEmail] = useState('');
    const[password,setPassword] = useState('');
    const submitHandler = (e) =>{
        e.preventDefault();
        setuserData({email:email,password:password})
        setEmail('');
        setPassword('');
    }

    const [userData, setuserData] = useState('')
  return ( 
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className='w-16 mb-10 ' src={assets.uberLogo}alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className="text-lg font-medium  mb-2">What's your Email</h3>
        <input 
        required
        value={email} // two way binding
        onChange={(e)=>{
           setEmail(e.target.value)
        }}
        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
        type="email"
        placeholder="email@example.com"/>

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>


        <input 
         className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        required
        value={password}
        onChange={(e)=>{
           setPassword(e.target.value)
        }}
        type="password" 
        placeholder="password"/>


        <button  className="bg-[#111] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base" >Login</button>
       <p className="text-center mb-2">New here? <Link to='/signup'className="text-blue-600 ">Create new Account</Link></p> 
      </form>
        </div>
        <div>
            <Link to='/captain-login'  className="flex justify-center items-center bg-[#10b461] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base" >Sign in as Captain</Link >
        </div>
    </div>
  );
};

export default UserLogin;
