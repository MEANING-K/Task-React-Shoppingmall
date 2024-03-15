import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Categories from './components/Categories.js';
import List from './components/List.js';
import Login from './Login.js';
import Cart from './components/Cart.js';
import ProductDetail from './components/ProductDetail.js'; // ProductDetail 컴포넌트 임포트
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
            <List selectedCategory={selectedCategory} />
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
        <Route path="/product/:productId" element={
          <>
            <Navbar />
            <ProductDetail />
          </>
        } /> {/* productId 매개변수를 전달하여 상세 페이지로 이동 */}
      </Routes>
      <footer />
    </div>
  );
}

export default App;
