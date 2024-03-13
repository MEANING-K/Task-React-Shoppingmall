// Navbar.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import Login from '../Login.js';

function Navbar() {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    return (
        <div>
            <div className="nav p-3 w-screen mx-auto bg-black text-white font-bold z-10 ">
                <button>MEANING-K</button>
                <div className="btns space-x-3">
                    <button>
                        <FaShoppingCart className="btn-icon size-5" />
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
