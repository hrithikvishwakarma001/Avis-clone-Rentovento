import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Inventory from './Inventory';
import Login from './Login';
import NotFound from './NotFound';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  )
}

export default AllRoutes
