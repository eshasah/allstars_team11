import React from "react"
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./common/Home";
import FormNew from "./signup/FormNew";
import VaccineCard from "./appointment/VaccineBody";

function App() {
  return (
      <Router>
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/signUp" element={<FormNew/>}/>
        </Routes >
      </Router>
  );
}

export default App;