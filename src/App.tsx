import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import React from "react";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
