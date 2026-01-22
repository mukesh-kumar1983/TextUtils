import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
    <>
    
    <Navbar title="Text Utility" aboutText="About" />
    <div className="container">

    {/* <TextForm heading={"Enter the text to analyze below"} /> */}
    <About/>
    
    </div>

    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};
export default App;
