import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <div className="container">
    <Navbar title="Text Utility" aboutText="About" />

    <TextForm heading={"Enter the text to analyze below"} />
    
    
    </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};
export default App;
