import React from 'react';

const ProductCard = ({ name, image }) => {
    return (
        <div className="product-card">
            <img src={`${image}`} alt={`${name}`} />
            <div className="overlay">
                <div>{name}</div>
                <div>$24.99</div>
            </div>
        </div>
    );
}

export default ProductCard;