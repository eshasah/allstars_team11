import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Home from './common/Home';
import FormNew from './signup/FormNew';
import VaccinationHistory from './common/vaccineHistory';
import BookingConfirmation from "./appointment/BookingConfirmation";

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<FormNew />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signUp" element={<FormNew />} />
        <Route path="/vaccineHistory" element={<VaccinationHistory />} />
        <Route path="/bookingConfirmation" element={<BookingConfirmation />} />
      </Routes >
    </Router>
  );
}

export default App;