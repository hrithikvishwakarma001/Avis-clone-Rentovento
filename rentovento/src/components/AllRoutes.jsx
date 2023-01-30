import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Inventory from './Inventory';
import Booking from './InventoryUtilities/Booking';
import Login from './Login';
import NotFound from './NotFound';
import ProductPage from './ProductPage';
import AdminPage from './AdminPage';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/booking" element={<Booking/>} />
        <Route path="/inventory/:id" element={<ProductPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
