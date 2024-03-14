import { useState } from 'react';
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
                <div className="btns space-x-3 mr-3">
                    <button onClick={handleCart}>
                        <FaShoppingCart className="$cart btn-icon size-5" />
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
