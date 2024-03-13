import React from 'react';
import './List.css';

function List() {
    return (
        <div className='m-4'>
            <p>Showing: {''}Items</p>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Card title</h5>
                            <div className="d-flex justify-content-between">
                                <button className="add-to-cart">Add to cart</button>
                                <p className="card-price">{`$ ${''}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
