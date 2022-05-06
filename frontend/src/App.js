import React from "react"
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./common/Home";
import NewRegistration from "./login/NewRegistration";

function App() {
  return (
      <Router>
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/newUser/Register" element={<NewRegistration/>}/>
        </Routes >
      </Router>
  );
}

export default App;