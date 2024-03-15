/* Navbar.js */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import Login from '../Login.js';

function Navbar() {
    const navigate = useNavigate(); // useNavigate 훅 사용
    const [showLogin, setShowLogin] = useState(false);
    const [cartCount, setCartCount] = useState(0); // 장바구니 상품 개수를 저장할 상태 추가

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartCount(savedCartItems.length); // 저장된 장바구니 아이템 개수 설정
        }
    }, []);

    const handleLoginClick = () => {
        // 로그인 버튼 클릭 시 리다이렉트
        navigate('/login');
    };

    const handleLogoClick = () => {
        // MEANING-K 클릭 시 리다이렉트
        navigate('/');
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    const handleCart = () => {
        navigate('/cart');
    }

    return (
        <div>
            <div className="nav p-3 w-screen mx-auto bg-black text-white font-bold z-10 ">
                <button onClick={handleLogoClick}>MEANING-K</button> {/* MEANING-K 클릭 시 리다이렉트 */}
                <div className="btns space-x-6 mr-3">
                    <button onClick={handleCart} className="cart-icon">
                        <FaShoppingCart className="btn-icon size-5" />
                        {cartCount > 0 && <span className="cart-item-count">{cartCount}</span>} {/* 장바구니 아이템 개수가 0보다 크면 표시 */}
                    </button>
                    <button>
                        <IoPersonCircle className="btn-icon size-6" />
                    </button>
                    <button onClick={handleLoginClick}>
                        <FaPowerOff className="Login-btn btn-icon size-5" />
                    </button>
                </div>
            </div>
            {showLogin && <Login onClose={handleCloseLogin} />}
        </div>
    );
}

export default Navbar;
