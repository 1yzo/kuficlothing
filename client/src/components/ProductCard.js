import React from 'react';

const ProductCard = ({ name, image, price }) => {
    return (
        <div className="product-card">
            <img src={`${image}`} alt={`${name}`} />
            <div className="overlay">
                <div>{name}</div>
                <div>${price / 100}</div>
            </div>
        </div>
    );
}

export default ProductCard;