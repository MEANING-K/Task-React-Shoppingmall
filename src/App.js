import { Routes, Route } from 'react-router-dom';
import React, { } from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import Categories from './components/Categories.js';
import List from './components/List.js';
import Login from './Login.js';
import "tailwindcss/tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} /> {/* '/' 경로에 대한 Navbar 컴포넌트 추가 */}
        <Route path="/login" element={<Login />} />
      </Routes>

      <Categories />
      <List />
      <footer />
    </div>
  );
}

export default App;
