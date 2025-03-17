
// export default UserLogin;
import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {

    const [email ,setEmail] = useState('');
    const [password , setPassword] = useState('');
    // const [userData, setUserData] = useState({});

    
    // const { user, setUser } = useContext(UserDataContext);
    const {  setUser } = useContext(UserDataContext);
    const navigate = useNavigate();



  const submitHandler = async (e) => {
    e.preventDefault(); // Prevents page refresh
    
    const userData = {
      email : email,
      password : password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      alert("login success")
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    console.log(userData);
    
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
          <Link to="/User-SignUp" className="text-primary">
          User Sign up 
          </Link>
        </p>

        {/* Rider Login Button (Not inside form) */}
        <Link  to='/Captain-Login' className="btn btn-outline-secondary w-100 mt-2">Captain Login</Link>
        </form>
        </div>      
    </div>
  );
};

export default UserLogin;
