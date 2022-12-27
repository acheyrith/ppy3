import React from "react";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import "./Account.css";
import { Routes, Route } from "react-router-dom";

const Account = () => {
  return (
    <section className="Account section__content">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </section>
  );
};

export default Account;
