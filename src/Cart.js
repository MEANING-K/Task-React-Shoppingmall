import React, { useState, useEffect } from 'react';
import './Cart.css';
import { FaTrashAlt } from "react-icons/fa";

function Cart() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartItems(savedCartItems);
        }
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const changeQuantity = (index, newQuantity) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = newQuantity;
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    return (
        <div>
            <div className='cart-title my-5 font-bold text-3xl text-center'>
                <h1>Cart</h1>
            </div>
            <div className="cart-items-container">
                {cartItems.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img className="cart-item-image" src={item.image} alt={item.title} />
                        <div className="cart-item-details">
                            <p className="cart-item-title">{item.title}</p>
                            <p className="cart-item-price">{`$ ${item.price}`}</p>
                            <button className="delete-button" onClick={() => removeFromCart(index)}><FaTrashAlt /></button>
                        </div>
                        <div>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => changeQuantity(index, parseInt(e.target.value))}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
