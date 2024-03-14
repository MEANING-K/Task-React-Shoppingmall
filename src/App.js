import { Routes, Route } from 'react-router-dom';
import React from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import Categories from './components/Categories.js';
import List from './components/List.js';
import Login from './Login.js';
import Cart from './Cart.js';
import "tailwindcss/tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Categories />
            <List />
          </>
        } />
        <Route path="/login" element={
          <>
            <Navbar />
            <Login />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Navbar />
            <Cart />
          </>
        } />
      </Routes>
      <footer />
    </div>
  );
}

export default App;
