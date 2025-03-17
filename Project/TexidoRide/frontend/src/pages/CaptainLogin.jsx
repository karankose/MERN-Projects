
import React, { useState , useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Rider.png";
import {CaptainDataContext} from '../context/CaptainContext'

import axios from "axios";
import { useNavigate } from "react-router-dom";


const CaptainLogin = () => {

    const [email ,setEmail] = useState('');
    const [password , setPassword] = useState('');
    

    const {setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevents page refresh
    const captain = {
      email: email,
      password: password
  };
  
console.log(email  , password);

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captain)

    if(response.status === 200){
     
      const data = response.data
      setCaptain(data.captain)
      alert("login success")
      localStorage.setItem('token',data.token)
      navigate('/Captain-Home')
     
      
    }


    setEmail('');
    setPassword('');
    // console.log(`${email} and ${password}`);
    
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #007bff, #6610f2)",
      }}
    >
      <div
        className="p-4 rounded shadow-lg w-100"
        style={{
          maxWidth: "400px",
          background: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <div className="text-center mb-3">
          <img src={logo} alt="TEXIDO Logo" style={{ maxWidth: "100px" }} />
        </div>

        <h2 className="text-center mb-3">Login</h2>

        {/* ✅ Form added */}
        <form onSubmit={(e)=>{
            submitHandler(e);
        }}>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input type="email" 
            placeholder="Enter your email" 
            className="form-control" 
            required 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input type="password"
             placeholder="Enter your password" 
             className="form-control" 
             required 
             value={password}
             onChange={(e)=>{
                setPassword(e.target.value)
             }}
             />
          </div>

          {/* ✅ Submit Button */}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        

        <p className="text-center mt-2">
          Don't have an account?{" "}
          <Link to="/Captain-SignUp" className="text-primary">
          Captain Sign up
          </Link>
        </p>

        {/* Rider Login Button (Not inside form) */}
        <Link  to='/User-Login' className="btn btn-outline-secondary w-100 mt-2">User Login</Link>
        </form>
        </div>      
    </div>
  );
};

export default CaptainLogin;
