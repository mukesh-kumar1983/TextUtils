import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  

  const toggleMode = () => {
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "#fff";
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#343a40";
    }
  };

  return (
    <>
      <Navbar title="Text Utility" mode={mode} aboutText="About" toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading={"Enter the text to analyze below"} />
        {/* <About/> */}
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
export default App;
