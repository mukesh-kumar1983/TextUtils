import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState, useEffect } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // ----- YOUR EXISTING TOGGLE (KEPT INTACT) -----
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#141d30';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  // ----- NEW FUNCTION: Changes Navbar + Body together -----
  const changeTheme = (navColor, bodyColor, gradient) => {
    setMode(navColor); // this keeps Bootstrap navbar working

    if (gradient) {
      document.body.style.background = gradient;
    } else {
      document.body.style.backgroundColor = bodyColor;
    }

    document.body.style.transition = "background 0.5s ease-in-out";

    showAlert(`Theme changed to ${navColor}`, "success");
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutUs="About Us"
        mode={mode}
        toggleMode={toggleMode}
        changeTheme={changeTheme}   // <-- NEW PROP (doesn't break anything)
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm heading="Enter your text here" mode={mode} />
      </div>
    </>
  );
}

export default App;
