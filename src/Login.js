// Login.js
import React, { useState } from 'react';
import { loginEmail, signupEmail, loginGoogle } from './firebase.js';
import './Login.css';

function Login({ onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (e.target.id === 'signin') {
            loginEmail(email, password)
                .then((result) => {
                    const user = result.user;
                    onClose();
                })
                .catch((error) => console.log(error));
        } else if (e.target.id === 'signup') {
            signupEmail(email, password)
                .then((result) => {
                    const user = result.user;
                    onClose();
                })
                .catch((error) => console.log(error));
        }
    };

    const handleGoogleLogin = () => {
        loginGoogle()
            .then((result) => {
                const user = result.user;
                onClose();
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
            </form>
            <button id="google" onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
}

export default Login;
