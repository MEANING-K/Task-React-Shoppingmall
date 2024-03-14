import React, { useState } from 'react';
import './Categories.css';

function Categories({ onSelectCategory }) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category); // 선택된 카테고리를 상위 컴포넌트로 전달
    };

    return (
        <div>
            <h1 className='my-5 font-bold text-5xl text-center'>Products</h1>
            <div className='categories-btn mb-4 font-bold space-x-6'>
                {['All', 'Electronics', 'Jewelry', 'Men', 'Women'].map(category => (
                    <button
                        key={category}
                        className={`ct-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategorySelect(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Categories;
