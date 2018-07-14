import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ name, image, price }) => {
    return (
        <Link className="card-holder" to={`/products/${name}`} params={{ name, image, price }}>
            <div className="product-card">
                <img src={`${image}`} alt={`${name}`} />
                <div className="overlay">
                    <div>{name}</div>
                    <div>${price / 100}</div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;