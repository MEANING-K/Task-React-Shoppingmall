// SignupModal.js
import React, { useState } from 'react';
import { signupEmail } from './firebase.js';
import './SignupModal.css';

function SignupModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        signupEmail(email, password)
            .then((result) => {
                const user = result.user;
                onClose(); // 회원가입 성공 시 모달 닫기
            })
            .catch((error) => setError(error.message));
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form>
                    <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleSignup}>Sign Up</button>
                </form>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
}

export default SignupModal;
