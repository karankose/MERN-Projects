import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Rider.png";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  // const { rider,setRider} =React.useContext(RiderDataContext)
  const { setCaptain } = useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,

      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        vehicleType: vehicleType,
        capacity: vehicleCapacity,
      },
    };
    console.log(captainData);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData
    );
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      console.log(data);
      console.log(captainData);
      alert("succeess");
      localStorage.setItem("token", data.token);
      navigate("/Captain-Home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
    console.log("Captain Signup Form Submitted!");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(to right, #ff9800, #ff5722)" }}
    >
      <div
        className="p-4 rounded shadow-lg w-100"
        style={{ maxWidth: "400px", background: "rgba(255, 255, 255, 0.9)" }}
      >
        <div className="text-center mb-3">
          <img src={logo} alt="TEXIDO Logo" style={{ maxWidth: "100px" }} />
        </div>

        <h2 className="text-center mb-3">Captain Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="form-label">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="form-control"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="form-control"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Vehicle Capacity</label>
            <input
              type="tel"
              placeholder="Enter Vehicle Capacity"
              className="form-control"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Vehicle Color</label>
            <input
              type="text"
              placeholder="Enter vehicle color"
              className="form-control"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Vehicle Plate</label>
            <input
              type="text"
              placeholder="Enter vehicle plate number"
              className="form-control"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Vehicle Type</label>
            <select
              className="form-control"
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">motorcycle</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter a password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Create Account
          </button>
        </form>

        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link to="/Captain-Login" className="text-warning">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignUp;
