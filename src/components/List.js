import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate를 import합니다.
import './List.css';

function List({ selectedCategory }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            let apiUrl;
            switch (selectedCategory) {
                case 'All':
                    apiUrl = 'https://fakestoreapi.com/products';
                    break;
                case 'Electronics':
                    apiUrl = 'https://fakestoreapi.com/products/category/electronics';
                    break;
                case 'Jewelry':
                    apiUrl = 'https://fakestoreapi.com/products/category/jewelery';
                    break;
                case 'Men':
                    apiUrl = 'https://fakestoreapi.com/products/category/men\'s%20clothing';
                    break;
                case 'Women':
                    apiUrl = 'https://fakestoreapi.com/products/category/women\'s%20clothing';
                    break;
                default:
                    apiUrl = 'https://fakestoreapi.com/products';
            }

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setFilteredProducts(data);
            } catch (error) {
                console.error('상품을 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchProductsByCategory();
    }, [selectedCategory]);

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

    const handleProductClick = (productId) => {
        // 해당 상품의 상세 페이지로 이동하는 함수
        navigate(`/product/${productId}`);
    };

    const handleAddToCart = (event, product) => {
        event.stopPropagation(); // 이벤트 전파 방지
        addToCart(product); // addToCart 함수 호출
    };

    return (
        <div className='m-4'>
            <p className='mb-3 text-slate-400 font-semibold'>Showing: {filteredProducts.length} items</p>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {filteredProducts.map(product => (
                    <div className="col" key={product.id} onClick={() => handleProductClick(product.id)}>
                        {/* 각 상품을 클릭하면 handleProductClick 함수가 호출되도록 함 */}
                        <div className="card h-100">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body d-flex flex-column h-40">
                                <h5 className="card-title">{product.title}</h5>
                                <div className="cart-price d-flex justify-content-between">
                                    <button className="add-to-cart" onClick={(e) => handleAddToCart(e, product)}>Add to cart</button>
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
