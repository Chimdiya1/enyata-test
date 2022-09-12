import React from "react";
import {Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import Login from "./pages/Login/Login";


export default function AppRouter () {
  return (
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route  path='/dashboard' element={<Dashboard/> }/>
        <Route  path='/dashboard/:category' element={<CategoryPage/> }/>
        <Route  path='/dashboard/:category/:id' element={<ItemPage/> }/>
      </Routes>
  );
}
