// 
import React, { useEffect} from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
    // const {  } = useContext(UserDataContext); // Assuming user context contains auth info
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/User-Login'); // Ensure this is the correct login route
        }
    }, [token, navigate]);

    return <>{children}</>;
};

export default UserProtectWrapper;
