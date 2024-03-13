import React, { useState, useEffect } from 'react';
import './List.css';

function List() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className='m-4'>
            <p className='mb-3'>Showing: {products.length} Items</p>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {products.map(product => (
                    <div className="col" key={product.id}>
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body d-flex flex-column h-40">
                                <h5 className="card-title">{product.title}</h5>
                                <div className="cart-price d-flex justify-content-between">
                                    <button className="add-to-cart">Add to cart</button>
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
