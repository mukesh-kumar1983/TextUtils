import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'


function App() {
  return (
    <>
    
    <Navbar title="Text Utility" aboutText="About" />
    
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};
export default App;
