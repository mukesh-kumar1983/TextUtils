import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState('dark'); // default dark mode

  // Toggle between dark and light mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      
      document.body.style.backgroundColor = "#141d30";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutUs="About Us" />
      <div className="container my-3">
        <TextForm heading="Enter your text here" mode={mode} />
        <About />
      </div>
    </>
  );
}

export default App;
