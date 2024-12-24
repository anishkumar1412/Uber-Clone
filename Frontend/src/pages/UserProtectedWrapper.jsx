import React, { useContext, useEffect } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserDataContext);
const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
     

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (response.status === 200) {
            setUser(response.data.user);
            setIsLoading(false);    
        }
    }).catch((err) => {
        console.log(err);
        localStorage.removeItem('token');
        navigate('/login');
    })
}, [token, navigate, setUser]);

if(isLoading) {
    return <div>Loading...</div>;
}

    // Render nothing or a loading spinner while redirecting
    if (!token) {
        return null; // Or you can return a loader component
    }

    return <>{children}</>;
};

export default UserProtectedWrapper;
