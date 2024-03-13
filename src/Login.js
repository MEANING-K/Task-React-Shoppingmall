import React, { useState } from 'react';
import { loginEmail, signupEmail, loginGoogle } from './firebase.js';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onClose }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (e.target.id === 'signin') {
            loginEmail(email, password)
                .then((result) => {
                    const user = result.user;
                    if (typeof onClose === 'function') {
                        onClose();
                    }
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                    alert('존재하지 않는 이메일 또는 비밀번호입니다.');
                    setEmail('');
                    setPassword('');
                });
        } else if (e.target.id === 'signup') {
            navigate('/join');
        }
    };

    const handleGoogleLogin = () => {
        loginGoogle()
            .then((result) => {
                const user = result.user;
                if (typeof onClose === 'function') {
                    onClose();
                }
                navigate('/');
            })
            .catch((error) => console.log(error));
    };

    return (
        <div id="login-area" className="full-screen">
            <form id="buttons">
                <input type="email" id="login-email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" id="login-password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <button id="signin" onClick={handleLogin}>Sign In</button>
                <button id="signup" onClick={handleLogin}>Sign Up</button>
                <button id="google" onClick={handleGoogleLogin}>Login with Google</button>
            </form>
        </div>
    );
}

export default Login;