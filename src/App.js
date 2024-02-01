import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Login from './login';
import Home from './home';
import { getToken } from "./utils";
import WithOutNav from "./withOutNav";
import WithNav from "./withNav";

function App() {
  const token=getToken()
  
  return (
    <Router>
    <Routes>
    <Route element ={<WithOutNav />}>
    <Route path="/" element={token ? <Navigate to="/home" /> : <Login />} />
    <Route path="/login" element={<Login />} />
    </Route>
    <Route element = {<WithNav />}>
    <Route path="/home" element={<Home />} />
    </Route>
    </Routes>
  </Router>
  );
}

export default App;
