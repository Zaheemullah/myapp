import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const toggleMode = () =>{
      if (mode === 'light'){
        setmode('dark');
        document.body.style.background = '#042743';
        showAlert("Dark mode has been enabled", "success");
        document.title = 'TextUtilis - Home - Dark Mode';
        }
      else{
        setmode('light');
        document.body.style.background = 'white';
        showAlert("light mode has been enabled", "success");
        document.title = 'TextUtilis - Home - Light Mode'; 
      }
  }
  
  return (
    <>
     {/* <Router> */}
      <Navbar title="TextUtilis" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* // <Routes> */}
        {/* <Route path="/about" element={<About />} /> */}
        <TextForm showAlert={showAlert} heading="Enter a text to analyze below" mode={mode} />
      {/* // </Routes> */}
      {/* <div className="container my-5"> */}
        {/* You can add additional content here if needed */}
      {/* </div> */}
    {/* </Router> */}
    </>
  );
}

export default App;
