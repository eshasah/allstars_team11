import React from "react"
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./common/Home";
import FormNew from "./login/FormNew";

function App() {
  return (
    <FormNew/>
      // <Router>
      //   <Routes >
      //     <Route path="/" element={<Home/>}/>
      //     <Route path="/newUser/Register" element={<NewRegistration/>}/>
      //   </Routes >
      // </Router>
  );
}

export default App;