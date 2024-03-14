import React from 'react';
import './Categories.css';

function Categories() {

    return (
        <div>
            <h1 className='my-5 font-bold text-5xl text-center'>Products</h1>
            <div className='categories-btn mb-4 font-bold space-x-6'>
                <button className='ct-btn'>All</button>
                <button className='ct-btn'>Electronics</button>
                <button className='ct-btn'>Jewelry</button>
                <button className='ct-btn'>Men</button>
                <button className='ct-btn'>Women</button>
            </div>
        </div>
    );
}



export default Categories;