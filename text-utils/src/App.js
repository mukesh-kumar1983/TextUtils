import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Home from "./components/Home";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router>
      <Navbar title="Text Utility" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

export default App;
