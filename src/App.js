import "./App.css";
import Navbar from "./Componets/Navbar";
import Home from "./Componets/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Componets/Project";
import Skils from "./Componets/Skils";
import Contact from "./Componets/Contact";
import Hireme from "./Componets/Hireme";
import React, { useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.body.style.background = mode === "dark" ? "black" : "white";
    document.body.style.color = mode === "dark" ? "white" : "black";
  });
  return (
    <>
      <BrowserRouter>
        <div className={`app-theme ${mode}`}>
          <Navbar mode={mode} togglemode={togglemode} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Project" element={<Project />}></Route>
            <Route path="/skils" element={<Skils />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Hireme" element={<Hireme />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
