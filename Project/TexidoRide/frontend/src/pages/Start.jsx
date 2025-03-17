import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import bg1 from '../Images/bg1.jpg';

const Start = () => {
  return (
    <div
      style={{
        background: `url(${bg1}) no-repeat center center/cover`,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        
      }}
    >
     
      <img src={logo} alt="TEXIDO Logo" style={{ maxWidth: "120px", marginBottom: "20px" }} />

     
      <div
        style={{
          background: "rgba(98, 213, 204, 0.5)", // Transparent Black
          padding: "30px",
          borderRadius: "15px",
          width: "90%", // Responsive Width
          maxWidth: "500px" // Maximum Width for Large Screens
        }}
      >
        <h1 className="display-4 fw-bold">Welcome to TEXIDO</h1>
        <p className="lead">Your ride, your way. Book your ride now!</p>
        <Link to="/User-Login" className="btn btn-light btn-lg shadow">Get Started</Link>
      </div>
    </div>
  );
}

export default Start;
