


import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
import logo from "../Images/logo.png";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [ userData , setUserData] = useState({});
  const [error, setError] = useState(null);
  
  
  const navigate = useNavigate();
  // const { user, setUser } = useContext(UserDataContext);
  const { setUser } = useContext(UserDataContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        console.log(data);
        alert("succeess")
        
        localStorage.setItem("token", data.token);
        navigate("/User-Login");
      }
    } catch (error) {
      console.log(error)
      setError(error.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(to right, #28a745, #20c997)" }}>
      <div className="p-4 rounded shadow-lg w-100" style={{ maxWidth: "400px", background: "rgba(255, 255, 255, 0.9)" }}>
        <div className="text-center mb-3">
          <img src={logo} alt="TEXIDO Logo" style={{ maxWidth: "100px" }} />
        </div>

        <h2 className="text-center mb-3">Sign Up</h2>
        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="form-label">First Name</label>
            <input type="text" placeholder="Enter your first name" className="form-control" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">Last Name</label>
            <input type="text" placeholder="Enter your last name" className="form-control" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input type="email" placeholder="Enter your email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input type="password" placeholder="Enter a password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success w-100">Create Account</button>
        </form>

        <p className="text-center mt-2">
          Already have an account? <Link to="/User-Login" className="text-success">Login</Link>
        </p>
        <Link to="/Captain-signUp" className="btn btn-outline-secondary w-100 mt-2">Captain Signup</Link>
      </div>
    </div>
  );
};

export default UserSignUp;

