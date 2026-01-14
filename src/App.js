// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import react, {useState} from 'react';

function App() {

  const [mode, setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#141d30';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
      
    };
  return (
    <>
    
    <Navbar title="TextUtils" aboutUs="About Us" mode={mode} toggleMode={toggleMode} />

    <div className="container my-3">
    <TextForm heading="Enter your text here" mode={mode} /> 
    {/* <About /> */}
    </div>
    
    </>
  );
}

export default App;
