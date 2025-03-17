import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import logo from "../Images/logo.png";
import axios from "axios";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from '../components/LocationSearchPanel'
import { VehiclePanel } from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen , setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null)
  const [ vehicleFound, setVehicleFound ] = useState(false)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null);
   const [ waitingForDriver, setWaitingForDriver ] = useState(false)



   const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
        setPickupSuggestions(response.data)
    } catch {
        // handle error
    }
}

const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
    } catch {
        // handle error
    }
}





  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding:24
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding:0
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanelOpen])

  

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[waitingForDriver])
 
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5 z-10"
        src={logo}
        alt="TEXIDO Logo"
      />

      <div  className="h-screen w-screen">
        <img
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          className=" w-full h-full object-cover"
          alt="Map Background"
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-1 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-15 bg-gray-900 rounded-b-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white  h-0">
          <LocationSearchPanel 
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      
      <div ref={vehiclePanelRef} className="fixed w-full translate-y-full bg-white py-8 px-3 bottom-0 z-10">
             <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={confirmRidePanelRef} className="fixed w-full translate-y-full bg-white py-8 px-3 bottom-0 z-10">
             <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef}  className="fixed w-full translate-y-full bg-white py-8 px-3 bottom-0 z-10">
            <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForDriverRef}  className="fixed w-full  bg-white py-8 px-3 bottom-0 z-10">
            <WaitingForDriver  waitingForDriver={waitingForDriver} />
      </div>

    </div>
  );
};

export default Home;
