
import React, { useEffect} from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    // const [ isLoading, setIsLoading ] = useState(true)
    // const {captain , setCaptain } = useContext(CaptainDataContext)


    useEffect(() => {
        if (!token) {
            navigate('/Captain-Login'); // Ensure this is the correct login route
        }
    }, [token, navigate]);

    return <>{children}</>;
};

export default CaptainProtectWrapper;

// code 2  3@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React, { useContext, useEffect, useState } from "react";
// import { CaptainDataContext } from "../context/CaptainContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const CaptainProtectWrapper = ({ children }) => {
//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(true);
//     const {  setCaptain } = useContext(CaptainDataContext);

//     useEffect(() => {
//         if (!token) {
//             navigate('/Captain-Login');
//             return;
//         }

//         axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         .then(response => {
//             if (response.status === 200) {
//                 setCaptain(response.data.captain);
//                 setIsLoading(false);
//             }
//         })
//         .catch(() => {
//             localStorage.removeItem('token');
//             navigate('/Captain-Login');
//         });

//     }, [token, navigate, setCaptain]);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     return <>{children}</>;
// };

// export default CaptainProtectWrapper;



// code 3############################


// import React, { useContext, useEffect, useState } from 'react'
// import { CaptainDataContext } from '../context/CaptainContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// const CaptainProtectWrapper = ({
//     children
// }) => {

//     const token = localStorage.getItem('token')
//     const navigate = useNavigate()
//     const {  setCaptain } = useContext(CaptainDataContext)
//     const [ isLoading, setIsLoading ] = useState(true)




//     useEffect(() => {
//         if (!token) {
//             navigate('/Captain-login')
//         }

//         axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }).then(response => {
//             if (response.status === 200) {
//                 setCaptain(response.data.captain)
//                 setIsLoading(false)
//             }
//         })
//             .catch(err => {
//                 console.log(err);
                
//                 localStorage.removeItem('token')
//                 navigate('/Captain-login')
//             })
//     }, [ token ])

    

//     if (isLoading) {
//         return (
//             <div>Loading...</div>
//         )
//     }



//     return (
//         <>
//             {children}
//         </>
//     )
// }

// export default CaptainProtectWrapper;