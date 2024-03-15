import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useParams와 useNavigate를 import합니다.
import './ProductDetail.css'

function ProductDetail() {
    const { productId } = useParams(); // URL에서 productId 가져오기
    const [product, setProduct] = useState(null);
    const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('상품 정보를 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    const addToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // 기존 장바구니 아이템 불러오기
        const updatedCart = [...cartItems, product]; // 새로운 상품 추가
        localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // 업데이트된 장바구니 저장
        alert('상품이 장바구니에 추가되었습니다.'); // 추가 알림
    };

    const handleGoToCart = () => {
        navigate('/cart'); // 장바구니 페이지로 이동
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='detail-page flex m-10 p-5'>
            <img className='detail-product-img' src={product.image} alt={product.title} />
            <div className='detail-etc ml-11'>
                <h2 className='detail-product-title'>{product.title}</h2>
                <p className='detail-product-description'>{product.description}</p>
                <p className='detail-product-price'>{`$ ${product.price}`}</p>
                <div className="detail-button-container">
                    <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to cart</button>
                    <button className="go-to-cart-button" onClick={handleGoToCart}>Go to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
