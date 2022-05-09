import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./onepirate/Privacy";
import SignIn from "./onepirate/SignIn";
import SignUp from "./onepirate/SignUp";
import ForgotPassword from "./onepirate/ForgotPassword";
import Terms from "./onepirate/Terms";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
