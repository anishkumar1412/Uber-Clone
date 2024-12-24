import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  
 
  
      const [email, setEmail] = useState('');
      const[password,setPassword] = useState('');

      const {captain,setCaptain} = React.useContext(CaptainDataContext);
      const navigate = useNavigate();
      const submitHandler = async (e) =>{
          e.preventDefault();
          const captain = {
          email:email,
          password:password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)
        if(response.status === 200)
        {
          const data = response.data;
          setCaptain(data.captain)
          localStorage.setItem('token',data.token)
          navigate('/captain-home');
        }

          setEmail('');
          setPassword('');
      }
  
      
    return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className='w-16 mb-10 ' src='https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png'alt="" />
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
       <p className="text-center mb-2">Join a fleet?<Link to='/captain-signup'className="text-blue-600 ">Register as a Captain</Link></p> 
      </form>
        </div>
        <div>
            <Link to='/login'  className="flex justify-center items-center bg-[#d5622d] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base" >Sign in as User</Link >
        </div>
    </div>
    </div>
  )
}

export default CaptainLogin
