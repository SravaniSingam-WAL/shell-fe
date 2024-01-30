import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Login from './login';
import Home from './home';
import { getToken } from "./utils";

function App() {
  const token=getToken()
  
  return (
    <Router>
    <Routes>
    <Route path="/" element={token ? <Navigate to="/home" /> : <Login />} />
    <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
