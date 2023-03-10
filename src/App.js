import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert(
      {
        msg:message,
        type: type
      }
    )
    setTimeout(() =>{
        setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
   if(mode === "light") {
     setMode("dark");
     document.body.style.backgroundColor ='#423F3E';
     showAlert("Dark Mode has Enabled!!", "success");
   }   
   else{
     setMode("light");
     document.body.style.backgroundColor = "white";
     showAlert("Light Mode has Disabled","success");
   }
  }
  return (
      <Router>
      <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
      <Routes>
          <Route exact path="/about" element = {<About mode={mode} toggleMode={toggleMode}/>}/>
          <Route exact path="/" element = {<Textform mode={mode} toggleMode={toggleMode}/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
