import React, { useState, useEffect } from 'react';
import './Cart.css';
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            const updatedCartItems = savedCartItems.map(item => ({ ...item, quantity: item.quantity || 1 }));
            setCartItems(updatedCartItems);
        }
    }, []);

    const saveCartToLocalStorage = (cart) => {
        localStorage.setItem('cartItems', JSON.stringify(cart));
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        saveCartToLocalStorage(updatedCart);
    };

    const changeQuantity = (index, newQuantity) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = newQuantity;
        setCartItems(updatedCart);
        saveCartToLocalStorage(updatedCart);
    };

    return (
        <div>
            <div className='cart-title my-5 font-bold text-5xl text-center'>
                <h1>Cart</h1>
            </div>
            {cartItems.length === 0 ? (
                <p className='empty'><MdRemoveShoppingCart />Your cart is empty</p>
            ) : (
                <div className="cart-items-container">
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img className="cart-item-image" src={item.image} alt={item.title} />
                            <div className="cart-item-details">
                                <p className="cart-item-title">{item.title}</p>
                                <p className="cart-item-price">{`$ ${item.price} * ${item.quantity} = $ ${((item.price * item.quantity).toFixed(2)).replace(/\.?0+$/, '')}`}</p>
                                <button className="delete-button" onClick={() => removeFromCart(index)}><FaTrashAlt /></button>
                            </div>
                            <div className="quantity-controls">
                                <div className="decrease-quantity" onClick={() => changeQuantity(index, Math.max(0, item.quantity - 1))}>
                                    <FaMinus />
                                </div>
                                <input
                                    type="number"
                                    className="quantity-input"
                                    value={item.quantity}
                                    onChange={(e) => changeQuantity(index, parseInt(e.target.value))}
                                />
                                <div className="increase-quantity" onClick={() => changeQuantity(index, item.quantity + 1)}>
                                    <FaPlus />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total text-xl font-semibold">
                        <p>Total: ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2).replace(/\.?0+$/, '')}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
