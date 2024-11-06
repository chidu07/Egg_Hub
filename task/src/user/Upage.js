import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Home";
import Logos from "./Logos";
// import About from "../component/About";

export default function Upage() {
  return (
    <>
      <Home />
      <Logos/>

      {/* <About /> */}
    </>
  );
}
