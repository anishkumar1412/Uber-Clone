import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import axios from 'axios'
import { use } from 'react'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate()
  const {user,setUser}  = React.useContext(UserDataContext)
  const submitHandler = async (e)=>{
    e.preventDefault();
    const newUser = {
      
        fullname:{
  
          firstname: firstName,
          lastname: lastName
        },
        email: email,
        password: password,
        
      
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

    if(response.status === 201)
    {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token)

      navigate('/home');

    }
    setEmail('');
    setPassword('')
    setFirstName('');
    setLastName('');
    
  }
  return (
    <div>
       <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className='w-16 mb-10 ' src={assets.uberLogo}alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className="text-lg font-medium  mb-2">What's your Name</h3>
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


        <button  className="bg-[#111] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-sm" >Create Account </button>
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

export default UserSignup
