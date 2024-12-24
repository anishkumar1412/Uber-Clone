import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
    

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    ). then(response =>{
        if(response.status === 200)
        {
            setCaptain(response.data.captain);   
            setIsLoading(false);
        }
    }
    )
    .catch(err =>{
        console.log(err);
        localStorage.removeItem('token');
        navigate('/captain-login');
})
}, [token, navigate]);
    if(isLoading)
    {
        return<div>Loading...</div>
    }
    // Render nothing or a loading spinner while redirecting
    if (!token) {
        return null; // Or you can return a loader component
    }


    return <>{children}</>;
};

export default CaptainProtectedWrapper;
