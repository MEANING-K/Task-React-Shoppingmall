// App.js

import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Categories from './components/Categories.js';
import List from './components/List.js';
import Login from './Login.js';
import Cart from './components/Cart.js';
import "tailwindcss/tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Categories onSelectCategory={handleCategorySelect} />
            <List selectedCategory={selectedCategory} /> {/* 선택된 카테고리를 List 컴포넌트로 전달 */}
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
