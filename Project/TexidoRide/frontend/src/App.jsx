import React from "react";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import Start from "./pages/Start";
import { Route, Routes } from "react-router-dom";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import Home from "./pages/Home";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import  Riding  from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";
import "remixicon/fonts/remixicon.css";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/User-Login" element={<UserLogin />} />
        <Route path="/Riding" element={<Riding />} />
        <Route path="/User-SignUp" element={<UserSignUp />} />
        <Route path="/Captain-Login" element={<CaptainLogin />} />
        <Route path="/captain-riding" element={<CaptainRiding/>}/>
        <Route path="/Captain-SignUp" element={<CaptainSignUp />} />
        <Route
          path="home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route path="/Captain-Home" element={<CaptainProtectWrapper>
          <CaptainHome/>
        </CaptainProtectWrapper>} />
      </Routes>
    </>
  );
};

export default App;
