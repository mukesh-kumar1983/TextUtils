import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {

  

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
  setAlert({ message, type });

  setTimeout(() => {
    setAlert(null);
  }, 1500);
};

  const toggleMode = () => {
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "#fff";
      showAlert("Dark mode has been enabled", "success");
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#343a40";
      showAlert("Light mode has been enabled", "success");
    }
  };




  return (
    <>
      <Navbar title="Text Utility" mode={mode} aboutText="About" toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading={"Enter the text to analyze below"} showAlert={showAlert} />
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
