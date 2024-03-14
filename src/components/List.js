import React, { useState, useEffect } from 'react';
import './List.css';

function List() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('상품을 가져오는 중 오류가 발생했습니다:', error));
    }, []);

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartItems(savedCartItems);
        }
    }, []);

    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    return (
        <div className='m-4'>
            <p className='mb-3 text-slate-400 font-semibold'>Showing: {products.length} items</p>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {products.map(product => (
                    <div className="col" key={product.id}>
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body d-flex flex-column h-40">
                                <h5 className="card-title">{product.title}</h5>
                                <div className="cart-price d-flex justify-content-between">
                                    <button className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
                                    <p className="card-price">{`$ ${product.price}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;
