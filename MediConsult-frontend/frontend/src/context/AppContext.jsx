import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const navigate = useNavigate(); 

    const currencySymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [doctors, setDoctors] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const [userData, setUserData] = useState(false)

    // Getting Doctors using API
    const getDoctosData = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/doctor/list')
            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    // Getting User Profile using API
    // Getting User Profile using API
const loadUserProfileData = async () => {
    try {
        const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (data.success) {
            setUserData(data.userData);
        } else {
            toast.error(data.message);
        }

    } catch (error) {
        console.log(error);

        // Check if token is expired
        if (error.response?.status === 401) {
            toast.error("Session expired. Please login again.");
            setToken('');
            setUserData(false);
            localStorage.removeItem('token');
            navigate('/login', { replace: true });  
        } else {
            toast.error(error.message);
        }
    }
};


    useEffect(() => {
        getDoctosData()
    }, [])

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        }
    }, [token])

    const value = {
        doctors, getDoctosData,
        currencySymbol,
        backendUrl,
        token, setToken,
        userData, setUserData, loadUserProfileData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider