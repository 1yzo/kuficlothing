import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ name, image, price, stock }) => {
    return (
        <Link className="card-holder" to={`/products/${name}`} params={{ name, image, price }}>
            <div className="product-card">
                <img src={`${image}`} alt={`${name}`} />
                {(stock.small < 1 && stock.medium < 1 && stock.large < 1 && stock.xLarge < 1) &&
                    <div className="overlay overlay--stock">
                        Sold Out
                    </div>
                }
                <div className="overlay">
                    <div>{name}</div>
                    <div>${price / 100}</div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;