import { useState } from "react";
import "./App.css";
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForms from "./Components/Textforms";
import Alert from "./Components/Alert";
// import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
//   } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextStruct - Dark  Mode";
      setInterval(() => {
        document.title = "TextStruct is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install  TextStruct Now";
      }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextStruct - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title={"TextStruct"}
        Link="Links"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-5">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />}/> */}
        {/* <Route path="/" element={ */}
        <TextForms
          showAlert={showAlert}
          heading="Enter the text here to analyse"
          mode={mode}
        />
        {/* } /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
